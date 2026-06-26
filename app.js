// Official courses list
const officialCourses = [
    {name: "MTS-102", id: "mathematics"},
    {name: "MTS-104", id: "math"},
    {name: "GNS-102", id: "general"},
    {name: "CHE-102", id: "chemistry"},
    {name: "PHY-102", id: "physics"},
    {name: "GST-112", id: "culture"},
    {name: "MEE-102", id: "workshop"},
    {name: "GET-102", id: "get"},
    {name: "FCPE-102", id: "engineer"},
    {name: "CSC-102", id: "computer"},
    {name: "CHE-TUTORIAL", id: "tutorche"}
];
let currentUser = null;

// --- ✅ STORAGE HELPER — PREVENT QUOTA ERRORS ---
function safeSave(key, valueObj) {
    try {
        const jsonStr = JSON.stringify(valueObj);
        localStorage.setItem(key, jsonStr);
        return true;
    } catch (err) {
        if (err.name === "QuotaExceededError") {
            alert("⚠️ Storage FULL! Please clear old history or use fewer large files.");
            console.error("STORAGE QUOTA FULL:", err);
            return false;
        }
        alert("❌ Save error: " + err.message);
        return false;
    }
}

// --- ✅ COMPRESS PROFILE IMAGE — REDUCES SIZE BY 70–90% ---
function compressImage(file, maxWidth = 120, quality = 0.6, callback) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement("canvas");
            // Small fixed size — enough for profile display
            canvas.width = maxWidth;
            canvas.height = maxWidth;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, maxWidth, maxWidth);
            // Return smaller Base64 string
            const smallData = canvas.toDataURL("image/jpeg", quality);
            callback(smallData);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// --- TOGGLE PASSWORD VISIBILITY ---
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) field.type = field.type === "password" ? "text" : "password";
}

// --- THEME & FONT ---
function applySettings() {
    const t = localStorage.getItem("cbtTheme") || "light";
    const f = localStorage.getItem("cbtFont") || "medium";
    document.body.className = `${t}-theme ${f}-font`;
    if(document.getElementById("themeSwitch")) document.getElementById("themeSwitch").value = t;
    if(document.getElementById("fontSize")) document.getElementById("fontSize").value = f;
}
document.addEventListener("change", e => {
    if(e.target.id==="themeSwitch") {
        localStorage.setItem("cbtTheme", e.target.value); applySettings();
    }
    if(e.target.id==="fontSize") {
        localStorage.setItem("cbtFont", e.target.value); applySettings();
    }
});

// --- GREETING ---
function setGreeting() {
    const h = new Date().getHours();
    let g = "GOOD MORNING";
    if(h>=12&&h<17)g="GOOD AFTERNOON";
    if(h>=17)g="GOOD EVENING";
    const el = document.getElementById("greeting");
    if(el) el.textContent = `${g}, GENIUS 🧠`;
}

// --- AUTH NAVIGATION ---
function showTab(n) {
    if (!event || !event.target) return;
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.auth-card').forEach(c=>c.classList.remove('active-tab'));
    event.target.classList.add('active');
    const tabEl = document.getElementById(n+'Tab');
    if(tabEl) tabEl.classList.add('active-tab');
}

function getCourseObj(name) {
    return officialCourses.find(c=>c.name.toLowerCase()===name.trim().toLowerCase());
}

// --- SIGNUP — NOW WITH COMPRESSED IMAGE ---
function signupUser() {
    const matric = document.getElementById("matric")?.value.trim() || "";
    const pass = document.getElementById("password")?.value || "";
    const secQ = document.getElementById("secQuestion")?.value || "";
    const secA = document.getElementById("secAnswer")?.value.trim().toLowerCase() || "";
    const dept = document.getElementById("department")?.value.trim() || "";
    const school = document.getElementById("school")?.value.trim() || "";

    const users = JSON.parse(localStorage.getItem("cbtalluser")||"[]");
    if(users.find(u=>u.matric===matric)) return alert("❌ Matriculation number already registered!");
    if(!secQ || !secA) return alert("⚠️ Please select and answer your security question!");

    const inputCourses = (document.getElementById("selectedCourses")?.value || "")
        .split(',').map(s=>s.trim()).filter(Boolean);
    const selected = [];
    for(const nm of inputCourses) {
        const c = getCourseObj(nm);
        if(c) selected.push(c);
        else alert(`⚠️ "${nm}" is NOT an official course — skipped`);
    }
    if(!selected.length) return alert("⚠️ Select at least ONE valid official course!");

    const picFile = document.getElementById("profilePic")?.files[0];
    if(!picFile) return alert("⚠️ Upload profile picture!");

    // ✅ USE COMPRESSION BEFORE SAVING
    compressImage(picFile, 110, 0.55, function(smallPicData){
        const newUser = {
            surname: document.getElementById("surname")?.value.trim() || "",
            firstname: document.getElementById("firstname")?.value.trim() || "",
            matric, 
            password: pass,
            secQuestion: secQ, 
            secAnswer: secA,
            department: dept, 
            school: school,
            profilePic: smallPicData, // ✅ MUCH SMALLER
            courses: selected, 
            exams: [] // ✅ Limit history later if needed
        };

        users.push(newUser);
        if(!safeSave("cbtalluser", users)) {
            alert("❌ Could not save account — storage full!");
            return;
        }
        alert("✅ Account created successfully! Login now.");
        showTab('login');
    });
}

// --- LOGIN ---
function loginUser() {
    const matric = document.getElementById("loginMatric")?.value.trim() || "";
    const pass = document.getElementById("loginPass")?.value || "";

    if(!matric || !pass) return alert("⚠️ Fill both Matric Number and Password!");

    const users = JSON.parse(localStorage.getItem("cbtalluser")||"[]");
    const found = users.find(u=>u.matric === matric && u.password === pass);

    if(!found) return alert("❌ Invalid Matric Number or Password!");

    currentUser = found;
    safeSave("cbtActive", { matric: matric, loggedIn: true });
    alert("✅ Login successful — Welcome back!");
    loadDashboard();
}

// --- AUTO‑RESTORE SESSION ---
function restoreSession() {
    const saved = JSON.parse(localStorage.getItem("cbtActive") || "null");
    if(saved && saved.matric) {
        const allUsers = JSON.parse(localStorage.getItem("cbtalluser")||"[]");
        currentUser = allUsers.find(u => u.matric === saved.matric);
        if(currentUser) loadDashboard();
    }
}

// --- PASSWORD RECOVERY ---
function checkSecurity() {
    const matric = document.getElementById("resetMatric")?.value.trim() || "";
    const users = JSON.parse(localStorage.getItem("cbtalluser")||"[]");
    const user = users.find(u=>u.matric===matric);
    if(!user) return alert("❌ Matric number not found!");

    const qMap = {
        color: "What is your favorite color?",
        food: "What is your favorite food?",
        town: "Which town were you born in?",
        pet: "What was the name of your first pet?"
    };
    const qEl = document.getElementById("qDisplay");
    const secArea = document.getElementById("secArea");
    const resetBtn = document.getElementById("resetBtn");

    if(qEl) qEl.textContent = qMap[user.secQuestion] || "Answer your security question";
    if(secArea) secArea.style.display = "block";
    if(resetBtn) {
        resetBtn.onclick = () => resetPassword(user);
        resetBtn.textContent = "Reset Password";
    }
}

function resetPassword(user) {
    const ans = document.getElementById("resetAnswer")?.value.trim().toLowerCase() || "";
    const newPass = document.getElementById("newPass")?.value || "";
    
    if(ans !== user.secAnswer) return alert("❌ Wrong answer! Cannot reset password.");
    if(!newPass) return alert("⚠️ Enter new password!");

    const all = JSON.parse(localStorage.getItem("cbtalluser"));
    const idx = all.findIndex(u=>u.matric===user.matric);
    if(idx !== -1) {
        all[idx].password = newPass;
        safeSave("cbtalluser", all);
        alert("✅ Password reset successfully! Login now.");
        showTab('login');
    }
}

// --- COURSE MANAGEMENT ---
function updateCourseLists() {
    const remSel = document.getElementById("removeCourseList");
    if(!remSel || !currentUser) return;
    remSel.innerHTML = "";
    currentUser.courses.forEach(c=>{
        const opt = document.createElement("option");
        opt.value = c.id; opt.textContent = c.name;
        remSel.appendChild(opt);
    });
}
function addNewCourse() {
    if(!currentUser) return;
    const nm = document.getElementById("newCourseName")?.value.trim() || "";
    if(!nm) return;
    const c = getCourseObj(nm);
    if(!c) return alert("⚠️ Only official courses allowed — check spelling!");
    if(currentUser.courses.some(x=>x.id===c.id)) return alert("ℹ️ Course already added!");
    currentUser.courses.push(c);
    saveCurrentUser(); 
    updateCourseLists(); 
    renderSubjects();
    if(document.getElementById("newCourseName")) document.getElementById("newCourseName").value="";
}
function removeCourse() {
    if(!currentUser) return;
    const sel = document.getElementById("removeCourseList");
    if(!sel) return;
    const id = sel.value;
    currentUser.courses = currentUser.courses.filter(c=>c.id!==id);
    saveCurrentUser(); 
    updateCourseLists(); 
    renderSubjects();
}
function saveCurrentUser() {
    if(!currentUser) return;
    const all = JSON.parse(localStorage.getItem("cbtalluser"));
    const idx = all.findIndex(u=>u.matric===currentUser.matric);
    if(idx!==-1) {
        all[idx] = currentUser; 
        safeSave("cbtalluser", all); // ✅ SAFE SAVE
    }
}

// --- DASHBOARD ---
function loadDashboard() {
    applySettings(); 
    setGreeting();
    
    const authSec = document.getElementById("authSection");
    const dashSec = document.getElementById("dashboard");
    if(authSec) authSec.style.display = "none";
    if(dashSec) dashSec.style.display = "block";

    if(document.getElementById("dashPic")) document.getElementById("dashPic").src = currentUser.profilePic;
    if(document.getElementById("dashFirstname")) document.getElementById("dashFirstname").textContent = currentUser.firstname;
    if(document.getElementById("dashMatric")) document.getElementById("dashMatric").textContent = currentUser.matric;
    if(document.getElementById("menuPic")) document.getElementById("menuPic").src = currentUser.profilePic;
    if(document.getElementById("menuFirstname")) document.getElementById("menuFirstname").textContent = currentUser.firstname;
    if(document.getElementById("menuMatric")) document.getElementById("menuMatric").textContent = currentUser.matric;
    if(document.getElementById("menuDept")) document.getElementById("menuDept").textContent = `Dept: ${currentUser.department}`;
    if(document.getElementById("menuSchool")) document.getElementById("menuSchool").textContent = `School: ${currentUser.school}`;

    updateCourseLists(); 
    renderSubjects(); 
    updateStats(); 
    renderHistory(); 
    drawChart();
}

function renderSubjects() {
    const list = document.getElementById("subjectsList");
    if(!list) return;
    list.innerHTML = "";
    currentUser.courses.forEach(c=>{
        const btn = document.createElement("button");
        btn.className = "subject-btn";
        btn.textContent = c.name;
        btn.onclick = ()=>{
            localStorage.setItem("currentExam", JSON.stringify({subId:c.id,subName:c.name}));
            window.location.href="exam.html";
        };
        list.appendChild(btn);
    });
}

function updateStats() {
    const scores = currentUser.exams.map(e=>e.score);
    const avg = scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):0;
    let iq="Average";
    if(avg>=25)iq="Genius 🧠";
    else if(avg>=20)iq="Above Average";
    else if(avg>=15)iq="Good";
    else if(avg>=10)iq="Fair";
    else iq="Needs Improvement";
    const onTime = currentUser.exams.filter(e=>e.timeLeft>0).length;
    const timePct = currentUser.exams.length?Math.round((onTime/currentUser.exams.length)*100):0;
    
    if(document.getElementById("avgScore")) document.getElementById("avgScore").textContent=`${avg}%`;
    if(document.getElementById("iqGrade")) document.getElementById("iqGrade").textContent=iq;
    if(document.getElementById("timeMgmt")) document.getElementById("timeMgmt").textContent=`${timePct}%`;
}

function drawChart() {
    const canv = document.getElementById("performanceChart");
    if(!canv || typeof Chart === "undefined") return;
    const ctx = canv.getContext("2d");
    const labels = currentUser.exams.map(e=>new Date(e.date).toLocaleDateString());
    const scores = currentUser.exams.map(e=>Math.round(e.score/30*100));
    if(window.perfChart) window.perfChart.destroy();
    window.perfChart=new Chart(ctx,{
        type:"line",
        data:{labels,datasets:[{
            label:"Score (%)",borderColor:"#2563eb",backgroundColor:"rgba(37,99,235,.1)",
            fill:true,tension:.4,pointRadius:5,pointHoverRadius:7
        }]}
    });
}

function renderHistory() {
    const hist=document.getElementById("examHistory");
    if(!hist) return;
    hist.innerHTML="";
    // ✅ Optional: Keep only last 15 exams to save space
    const recentExams = currentUser.exams.slice(-15);
    recentExams.forEach((e,i)=>{
        const pct=Math.round(e.score/30*100);
        const card=document.createElement("div");
        card.className="history-card";
        card.innerHTML=`
            <div>
                <h4>${e.subject} — ${e.date}</h4>
                <p>Score: <strong>${e.score}/30 (${pct}%)</strong> | Time Left: ${e.timeLeft} mins</p>
            </div>
            <button onclick="viewCorrections(${currentUser.exams.indexOf(e)})">📖 Review</button>
        `;
        hist.appendChild(card);
    });
}

function viewCorrections(idx) {
    const exam = currentUser.exams[idx];
    if(!exam) return;
    let html = `<h2 style="margin-bottom:1.5rem">📝 Corrections — ${exam.subject}</h2>`;

    exam.questions.forEach((q, qi) => {
        const ua = exam.userAnswers?.[qi] || "";
        const ok = ua === q.answer;

        let optionsHtml = "";
        if (q.options && Array.isArray(q.options)) {
            optionsHtml = `<div style="margin:.6rem 0; padding-left:.5rem;">`;
            q.options.forEach(opt => {
                let optStyle = "color:#333";
                if (opt === q.answer) optStyle = "color:#166534; font-weight:bold; background:#dcfce7; padding:.2rem .4rem; border-radius:4px";
                else if (opt === ua && !ok) optStyle = "color:#991b1b; text-decoration:line-through";
                optionsHtml += `<p style="margin:.3rem 0; ${optStyle}">${opt}</p>`;
            });
            optionsHtml += `</div>`;
        }

        html += `
            <div style="padding:1rem;border-radius:8px;margin:.8rem 0;background:${ok?'#dcfce7':'#fee2e2'};border-left:4px solid ${ok?'#166534':'#991b1b'}">
                <p><strong>Q${qi+1}:</strong> ${q.question}</p>
                ${q.image ? `<img src="${q.image}" alt="Question image" class="question-img" style="max-width:100%; border-radius:4px; margin:.5rem 0;">` : ""}
                <p style="margin:.4rem 0;"><strong>Options:</strong></p>
                ${optionsHtml || "<em>No options available</em>"}
                <p>Your Answer: ${ua || '—'}</p>
                <p>Correct Answer: <strong>${q.answer}</strong></p>
                <p style="font-style:italic;margin-top:.5rem">📌 ${q.explanation || "No explanation provided"}</p>
            </div>
        `;
    });

    const win = window.open("", "_blank");
    win.document.write(`
        <style>
            body{font-family:Segoe UI;padding:2rem;max-width:750px;margin:auto;line-height:1.5;}
            .question-img{max-width:100%;}
        </style>
        ${html}
    `);
    win.document.close();
}

// --- MENU & UI ---
function toggleMenu() {
    const side = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");
    if(side) side.classList.toggle("open");
    if(overlay) overlay.classList.toggle("show");
}
window.addEventListener("scroll",()=>{
    const h=document.getElementById("mainHeader");
    if(h) {
        if(window.scrollY>50)h.classList.add("scrolled");
        else h.classList.remove("scrolled");
    }
});

function logout() {
    currentUser = null; 
    localStorage.removeItem("cbtActive"); 
    location.reload();
}

// --- START APP ---
window.addEventListener("DOMContentLoaded",()=>{
    applySettings();
    restoreSession();
});
