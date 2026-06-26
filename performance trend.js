// Official courses list
const officialCourses = [
    { name: "MTS-102", id: "mathematics" },
    { name: "MTS-104", id: "math" },
    { name: "GNS-102", id: "general" },
    { name: "CHE-102", id: "chemistry" },
    { name: "PHY-102", id: "physics" },
    { name: "GST-112", id: "culture" },
    { name: "MEE-102", id: "workshop" },
    { name: "GET-102", id: "get" },
    { name: "FCPE-102", id: "engineer" },
    { name: "CSC-102", id: "computer" }
];
let currentUser = null;

// --- Storage helpers ---
const STORAGE = {
    USERS: "cbtAllUsers",
    ACTIVE: "cbtActive",
    THEME: "cbtTheme",
    FONT: "cbtFont",
    EXAM: "currentExam"
};
function getStore(key, def) {
    try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : def;
    } catch { return def; }
}
function setStore(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); }
    catch (e) { console.error("Storage error:", e); alert("⚠️ Storage full — data may not save."); }
}

// --- Password toggle ---
function togglePassword(id) {
    const el = document.getElementById(id);
    if (el) el.type = el.type === "password" ? "text" : "password";
}

// --- Theme & Font ---
function applySettings() {
    const t = localStorage.getItem(STORAGE.THEME) || "light";
    const f = localStorage.getItem(STORAGE.FONT) || "medium";
    document.body.className = `${t}-theme ${f}-font`;
    document.getElementById("themeSwitch") && (document.getElementById("themeSwitch").value = t);
    document.getElementById("fontSize") && (document.getElementById("fontSize").value = f);
}
document.addEventListener("change", e => {
    if (e.target.id === "themeSwitch") { localStorage.setItem(STORAGE.THEME, e.target.value); applySettings(); }
    if (e.target.id === "fontSize") { localStorage.setItem(STORAGE.FONT, e.target.value); applySettings(); }
});

// --- Greeting ---
function setGreeting() {
    const h = new Date().getHours();
    let txt = "GOOD MORNING";
    if (h >= 12 && h < 17) txt = "GOOD AFTERNOON";
    if (h >= 17) txt = "GOOD EVENING";
    const el = document.getElementById("greeting");
    if (el) el.textContent = `${txt}, GENIUS 🧠`;
}

// --- Auth tabs ---
function showTab(n) {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".auth-card").forEach(c => c.classList.remove("active-tab"));
    event?.target?.classList.add("active");
    document.getElementById(n + "Tab")?.classList.add("active-tab");
}

function getCourseObj(name) {
    if (!name) return null;
    return officialCourses.find(c => c.name.toLowerCase() === name.trim().toLowerCase());
}

// --- Signup ---
function signupUser() {
    const matric = (document.getElementById("matric")?.value || "").trim();
    const pass = document.getElementById("password")?.value || "";
    const secQ = document.getElementById("secQuestion")?.value || "";
    const secA = (document.getElementById("secAnswer")?.value || "").trim().toLowerCase();
    const dept = (document.getElementById("department")?.value || "").trim();
    const school = (document.getElementById("school")?.value || "").trim();
    const users = getStore(STORAGE.USERS, []);

    if (users.some(u => u.m === matric)) return alert("Matriculation number already registered!");
    if (!secQ || !secA) return alert("Please select and answer your security question!");

    const inputCourses = (document.getElementById("selectedCourses")?.value || "")
        .split(",").map(s => s.trim()).filter(Boolean);
    const selected = [];
    for (const nm of inputCourses) {
        const c = getCourseObj(nm);
        if (c) selected.push(c);
        else alert(`"${nm}" is NOT an official course — skipped`);
    }
    if (!selected.length) return alert("Select at least ONE valid official course!");

    const pic = document.getElementById("profilePic")?.files[0];
    if (!pic) return alert("Upload profile picture!");
    if (pic.size > 300 * 1024) return alert("Image too large — max 300 KB");

    const reader = new FileReader();
    reader.onload = e => {
        const newUser = {
            sn: (document.getElementById("surname")?.value || "").trim(),
            fn: (document.getElementById("firstname")?.value || "").trim(),
            m: matric, p: pass,
            sq: secQ, sa: secA,
            d: dept, sch: school,
            pp: e.target.result.slice(0, 120000),
            c: selected, e: []
        };
        users.push(newUser);
        setStore(STORAGE.USERS, users);
        alert("Account created successfully! Login now.");
        showTab("login");
    };
    reader.readAsDataURL(pic);
}

// --- Login ---
function loginUser() {
    const matric = (document.getElementById("loginMatric")?.value || "").trim();
    const pass = document.getElementById("loginPass")?.value || "";
    const users = getStore(STORAGE.USERS, []);
    const found = users.find(u => u.m === matric && u.p === pass);
    if (!found) return alert("Invalid login details!");
    currentUser = found;
    setStore(STORAGE.ACTIVE, { m: matric });
    loadDashboard();
}

// --- Password recovery ---
function checkSecurity() {
    const matric = (document.getElementById("resetMatric")?.value || "").trim();
    const users = getStore(STORAGE.USERS, []);
    const user = users.find(u => u.m === matric);
    if (!user) return alert("Matric number not found!");

    const qMap = {
        color: "What is your favorite color?",
        food: "What is your favorite food?",
        town: "Which town were you born in?",
        pet: "What was the name of your first pet?"
    };
    document.getElementById("qDisplay").textContent = qMap[user.sq];
    document.getElementById("secArea").style.display = "block";
    document.getElementById("resetBtn").onclick = () => resetPassword(user);
    document.getElementById("resetBtn").textContent = "Reset Password";
}
function resetPassword(user) {
    const ans = (document.getElementById("resetAnswer")?.value || "").trim().toLowerCase();
    const newPass = document.getElementById("newPass")?.value || "";
    if (ans !== user.sa) return alert("Wrong answer! Cannot reset password.");
    if (!newPass) return alert("Enter new password!");

    const all = getStore(STORAGE.USERS, []);
    const idx = all.findIndex(u => u.m === user.m);
    if (idx !== -1) { all[idx].p = newPass; setStore(STORAGE.USERS, all); }
    alert("Password reset successfully! You can now login.");
    showTab("login");
}

// --- Course management ---
function updateCourseLists() {
    const sel = document.getElementById("removeCourseList");
    if (!sel) return;
    sel.innerHTML = "";
    currentUser.c.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.id; opt.textContent = c.name;
        sel.appendChild(opt);
    });
}
function addNewCourse() {
    const nm = (document.getElementById("newCourseName")?.value || "").trim();
    if (!nm) return;
    const c = getCourseObj(nm);
    if (!c) return alert("⚠️ Only official courses allowed — check spelling!");
    if (currentUser.c.some(x => x.id === c.id)) return alert("Course already added!");
    currentUser.c.push(c);
    saveCurrentUser(); updateCourseLists(); renderSubjects();
    document.getElementById("newCourseName").value = "";
}
function removeCourse() {
    const sel = document.getElementById("removeCourseList");
    if (!sel) return;
    currentUser.c = currentUser.c.filter(x => x.id !== sel.value);
    saveCurrentUser(); updateCourseLists(); renderSubjects();
}
function saveCurrentUser() {
    const all = getStore(STORAGE.USERS, []);
    const idx = all.findIndex(u => u.m === currentUser.m);
    if (idx !== -1) { all[idx] = currentUser; setStore(STORAGE.USERS, all); }
}

// --- Dashboard ---
function loadDashboard() {
    applySettings(); setGreeting();
    document.getElementById("authSection").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("dashPic").src = currentUser.pp || "";
    document.getElementById("dashFirstname").textContent = currentUser.fn || "";
    document.getElementById("dashMatric").textContent = currentUser.m || "";
    document.getElementById("menuPic").src = currentUser.pp || "";
    document.getElementById("menuFirstname").textContent = currentUser.fn || "";
    document.getElementById("menuMatric").textContent = currentUser.m || "";
    document.getElementById("menuDept").textContent = `Dept: ${currentUser.d || ""}`;
    document.getElementById("menuSchool").textContent = `School: ${currentUser.sch || ""}`;

    updateCourseLists(); renderSubjects(); updateStats(); renderHistory(); drawChart();
}
function renderSubjects() {
    const list = document.getElementById("subjectsList");
    if (!list) return;
    list.innerHTML = "";
    currentUser.c.forEach(c => {
        const btn = document.createElement("button");
        btn.className = "subject-btn";
        btn.textContent = c.name;
        btn.onclick = () => {
            setStore(STORAGE.EXAM, { subId: c.id, subName: c.name });
            window.location.href = "exam.html";
        };
        list.appendChild(btn);
    });
}
function updateStats() {
    const scores = currentUser.e.map(x => Number(x.s) || 0);
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    let grade = "Average";
    if (avg >= 25) grade = "Genius 🧠";
    else if (avg >= 20) grade = "Above Average";
    else if (avg >= 15) grade = "Good";
    else if (avg >= 10) grade = "Fair";
    const onTime = currentUser.e.filter(x => Number(x.t) > 0).length;
    const timePct = currentUser.e.length ? Math.round((onTime / currentUser.e.length) * 100) : 0;
    document.getElementById("avgScore").textContent = `${avg}%`;
    document.getElementById("iqGrade").textContent = grade;
    document.getElementById("timeMgmt").textContent = `${timePct}%`;
}

// ✅ FIXED: Performance trend chart — safe, always draws
function drawChart() {
    const canv = document.getElementById("performanceChart");
    if (!canv || !window.Chart) return;
    const ctx = canv.getContext("2d");

    // Clear old
    if (window.perfChart) { try { window.perfChart.destroy(); } catch {} }

    // Prepare safe data
    const exams = currentUser.e || [];
    const labels = exams.map(x => x.d ? new Date(x.d).toLocaleDateString() : "—");
    const data = exams.map(x => Math.round(((Number(x.s) || 0) / 30) * 100));

    window.perfChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels.length ? labels : ["No data"],
            datasets: [{
                label: "Score (%)",
                data: data.length ? data : [0],
                borderColor: "#2563eb",
                backgroundColor: "rgba(37,99,235,.1)",
                fill: true, tension: .4, pointRadius: 5, pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });
}

function renderHistory() {
    const hist = document.getElementById("examHistory");
    if (!hist) return;
    hist.innerHTML = "";
    (currentUser.e || []).forEach((ex, i) => {
        const s = Number(ex.s) || 0;
        const pct = Math.round((s / 30) * 100);
        const card = document.createElement("div");
        card.className = "history-card";
        card.innerHTML = `
            <div>
                <h4>${ex.sub || "Exam"} — ${ex.d || "—"}</h4>
                <p>Score: <strong>${s}/30 (${pct}%)</strong> | Time Left: ${ex.t || 0} mins</p>
            </div>
            <button onclick="viewCorrections(${i})">📖 Review</button>
        `;
        hist.appendChild(card);
    });
}

// --- Corrections ---
function viewCorrections(idx) {
    const exam = (currentUser.e || [])[idx];
    if (!exam) return;
    const total = (exam.q || []).length;
    const score = Number(exam.s) || 0;
    const pct = total ? Math.round((score / total) * 100) : 0;

    let html = `
        <h2 style="margin-bottom:1rem">📝 Corrections — ${exam.sub || ""}</h2>
        <div style="padding:.8rem;border-radius:8px;background:#f0f9ff;border-left:4px solid #0284c7;margin-bottom:1.5rem">
            <p style="margin:0">Total: ${total} &nbsp;|&nbsp; Score: ${score}/${total} &nbsp;|&nbsp; ${pct}%</p>
        </div>
    `;
    (exam.q || []).forEach((q, qi) => {
        const ua = (exam.a || [])[qi];
        const ok = ua === q.ans;
        let opts = "";
        if (Array.isArray(q.opts)) {
            opts = `<div style="margin:.6rem 0; padding-left:.5rem;">`;
            q.opts.forEach(o => {
                let st = "color:#333";
                if (o === q.ans) st = "color:#166534; font-weight:bold; background:#dcfce7; padding:.2rem .4rem; border-radius:4px";
                else if (o === ua && !ok) st = "color:#991b1b; text-decoration:line-through";
                opts += `<p style="margin:.3rem 0; ${st}">${o}</p>`;
            });
            opts += `</div>`;
        }
        html += `
            <div style="padding:1rem;border-radius:8px;margin:.8rem 0;background:${ok?'#dcfce7':'#fee2e2'};border-left:4px solid ${ok?'#166534':'#991b1b'}">
                <p><strong>Q${qi+1}:</strong> ${q.txt || ""}</p>
                ${q.img ? `<img src="${q.img}" class="question-img" style="max-width:100%; border-radius:4px; margin:.5rem 0;">` : ""}
                <p><strong>Options:</strong></p>${opts||"<em>No options</em>"}
                <p>Your Answer: ${ua||"—"}</p>
                <p>Correct: <strong>${q.ans}</strong></p>
                <p style="font-style:italic">📌 ${q.exp||"No explanation"}</p>
            </div>
        `;
    });
    const win = window.open("", "_blank");
    win.document.write(`
        <style>body{font-family:Segoe UI;padding:2rem;max-width:750px;margin:auto;line-height:1.5;}.question-img{max-width:100%;}</style>${html}
    `);
    win.document.close();
}

// --- Menu & scroll ---
function toggleMenu() {
    document.getElementById("sideMenu")?.classList.toggle("open");
    document.getElementById("menuOverlay")?.classList.toggle("show");
}
window.addEventListener("scroll", () => {
    const h = document.getElementById("mainHeader");
    if (h) h.classList.toggle("scrolled", window.scrollY > 50);
});
function logout() {
    currentUser = null; localStorage.removeItem(STORAGE.ACTIVE); location.reload();
}

// --- Start ---
window.addEventListener("DOMContentLoaded", () => {
    applySettings();
    const saved = getStore(STORAGE.ACTIVE, null);
    if (saved) {
        const all = getStore(STORAGE.USERS, []);
        currentUser = all.find(u => u.m === saved.m);
        if (currentUser) loadDashboard();
    }
});
