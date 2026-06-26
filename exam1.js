// 📚 FULL QUESTION BANK — NOW SUPPORTS IMAGES
const fullQuestionBank = {
    mathematics: [
        {
            question: "Simplify: 3(2x - 4) = ?",
            options: ["A. 6x - 4", "B. 6x - 12", "C. 5x - 7", "D. 2x - 12"],
            answer: "B",
            explanation: "Multiply each term: 3 × 2x = 6x, 3 × (-4) = -12 → 6x - 12"
        },
        {
            question: "What is the area of this square?",
            image: "images/square.png", // Example image path
            options: ["A. 16 cm²", "B. 8 cm²", "C. 12 cm²", "D. 20 cm²"],
            answer: "A",
            explanation: "Area = side × side = 4 × 4 = 16 cm²"
        },
        {
            question: "Solve: 2x + 5 = 15",
            options: ["A. 5", "B. 10", "C. 7", "D. 3"],
            answer: "A",
            explanation: "2x = 15 - 5 = 10 → divide by 2 → x = 5"
        },
        {
            question: "What is the value of π (pi) approximately?",
            options: ["A. 3.14", "B. 2.71", "C. 1.62", "D. 4.20"],
            answer: "A",
            explanation: "π ≈ 3.14159..."
        },
        {
            question: "Factorize: x² - 9",
            options: ["A. (x-3)²", "B. (x+3)(x-3)", "C. (x+9)(x-1)", "D. (x+3)²"],
            answer: "B",
            explanation: "Difference of two squares: a² - b² = (a+b)(a-b)"
        },
        {
            question: "Find 15% of 200",
            options: ["A. 20", "B. 25", "C. 30", "D. 35"],
            answer: "C",
            explanation: "0.15 × 200 = 30"
        }
    ],
    math: [
        {
            question: "If y = 3x + 2, what is y when x = 4?",
            options: ["A. 12", "B. 14", "C. 10", "D. 8"],
            answer: "B",
            explanation: "y = 3(4) + 2 = 12 + 2 = 14"
        }
    ],
    physics: [
        {
            question: "Which is a vector quantity?",
            options: ["A. Mass", "B. Time", "C. Velocity", "D. Temperature"],
            answer: "C",
            explanation: "Velocity has magnitude & direction."
        },
        {
            question: "Identify the instrument shown:",
            image: "images/voltmeter.png",
            options: ["A. Ammeter", "B. Voltmeter", "C. Galvanometer", "D. Resistor"],
            answer: "B",
            explanation: "Voltmeter measures potential difference in volts."
        },
        {
            question: "SI unit of electric current?",
            options: ["A. Volt", "B. Ampere", "C. Ohm", "D. Watt"],
            answer: "B",
            explanation: "Ampere (A) is base SI unit for current."
        },
        {
            question: "Formula for Force (Newton's 2nd Law):",
            options: ["A. F = m/a", "B. F = ma", "C. F = v/t", "D. F = mgh"],
            answer: "B",
            explanation: "Force = mass × acceleration"
        }
    ],
    chemistry: [
        {
            question: "Atomic number of Carbon is:",
            options: ["A. 6", "B. 8", "C. 12", "D. 14"],
            answer: "A",
            explanation: "Carbon has 6 protons → atomic number = 6"
        }
    ],
    general: [
        {
            question: "Synonym of 'Benevolent':",
            options: ["A. Cruel", "B. Kind", "C. Shy", "D. Lazy"],
            answer: "B",
            explanation: "Means well‑meaning and kind."
        }
    ],
    culture: [
        {
            question: "Who is known as the 'Father of Nigerian Literature'?",
            options: ["A. Wole Soyinka", "B. Chinua Achebe", "C. Chimamanda Adichie", "D. Ken Saro‑Wiwa"],
            answer: "B",
            explanation: "Chinua Achebe wrote 'Things Fall Apart'."
        }
    ],
    workshop: [
            {
        question: "The assembly of components parts of an equipment or a machine is called........",
        options: ["A. Fitting", "B. Bench work", "C. Fixing", "D. Sheet metal work"],
        answer: "A",
        explanation: "Fitting is the assembly of component parts of equipment or machine."
    },
    {
        question: "Sheet metal can be cut using the following tools EXCEPT............",
        image: "",
        options: ["A. Snips", "B. Vice", "C. Hacksaw", "D. Guillotine"],
        answer: "B",
        explanation: "Vice is not a cutting tool for sheet metal."
    },
    {
        question: "Hacksaw blade is made of............",
        image: "",
        options: ["A. Carbon or High Speed Steel", "B. Hardened Steel", "C. Forged Steel", "D. High Carbon Steel"],
        answer: "A",
        explanation: "Hacksaw blades are typically made of Carbon or High Speed Steel."
    },
    {
        question: "Chisels are made of .................",
        image: "",
        options: ["A. Hardened Steel", "B. High Speed Steel", "C. Forged High Carbon Steel", "D. High Grade Steel"],
        answer: "C",
        explanation: "Chisels are made of Forged High Carbon Steel."
    },
    {
        question: "Taps are used for making external thread",
        image: "",
        options: ["A. True", "B. A&B", "C. False", "D. None of the above"],
        answer: "C",
        explanation: "Taps are used for internal threads (False)."
    },
    {
        question: "Which of the following is used to determine the type of hammer?",
        image: "",
        options: ["A. Point", "B. Wedges", "C. Pein", "D. Eye"],
        answer: "C",
        explanation: "The pein determines the type of hammer."
    },
    {
        question: "Files are made of……………………",
        image: "",
        options: ["A. High Speed Steel", "B. Hardened Stainless Steel", "C. Hardened Mild Steel", "D. Hardened High Grade Steel"],
        answer: "D",
        explanation: "Files are made of Hardened High Grade Steel."
    },
    {
        question: "Rivets are not permanent mechanical fasteners.",
        image: "",
        options: ["A. None of the above", "B. False", "C. True", "D. All of the above."],
        answer: "A",
        explanation: "Rivets are permanent fasteners, so option A is correct."
    },
    {
        question: "Anvil is made of ………..",
        image: "",
        options: ["A. Forged steel", "B. Hardened Mild Steel", "C. High Speed steel", "D. Mild Steel"],
        answer: "B",
        explanation: "Anvil is made of Hardened Mild Steel."
    },
    {
        question: "Which of the following is not a typical part of a file……………",
        image: "",
        options: ["A. Point", "B. Shoulder", "C. Eye", "D. Face"],
        answer: "C",
        explanation: "Eye is not a typical part of a file."
    },
    {
        question: "The following are marking out tools EXCEPT………………...",
        image: "",
        options: ["A. Punch", "B. Scriber", "C. Try Square", "D. File"],
        answer: "D",
        explanation: "File is not a marking out tool."
    },
    {
        question: "Which of the following is not a method of filling………………",
        image: "",
        options: ["A. Draw filling", "B. Finish filling", "C. Start filling", "D. Cross filling"],
        answer: "C",
        explanation: "Start filling is not a standard method of filing."
    },
    {
        question: "Heavy duty type of power driven guillotine can be used to cut 12 mm steel plate",
        image: "",
        options: ["A. True", "B. False", "C. All of the above", "D. None of the above"],
        answer: "A",
        explanation: "True - Heavy duty guillotine can cut up to 12mm steel."
    },
    {
        question: "When production is carried out with the use of machine tools, it is referred to as ……...",
        image: "",
        options: ["A. Machine tools", "B. Lathe cutting", "C. Bench work", "D. None of the above"],
        answer: "C",
        explanation: "It is referred to as Bench work."
    },
    {
        question: "The drilled hole in riveting operation must not be larger than the rivet to allow the rivet expand when formed.",
        image: "",
        options: ["A. True", "B. False", "C. All of the above", "D. None of the above"],
        answer: "B",
        explanation: "The statement is False."
    },
    {
        question: "The depth of a blind hole can be accurately determined by-----------------------------",
        image: "",
        options: ["A. Vernier Caliper", "B. Measuring tape", "C. Steel rule", "D. Micrometer screw gauge"],
        answer: "A",
        explanation: "Vernier Caliper is used for accurate depth measurement."
    },
    {
        question: "The following information’s can be obtained on sequence of operation EXCEPT?",
        image: "",
        options: ["A. Tools used", "B. Operation performed", "C. Materials of those parts", "D. The risk involved in each operation"],
        answer: "D",
        explanation: "Risk involved is not typically part of sequence of operation details."
    },
    {
        question: "To produce a bolt on the fitters bench you need-----------------------------------------",
        image: "",
        options: ["A. Die", "B. Surface plate", "C. Micrometer screw gauge", "D. Tap"],
        answer: "A",
        explanation: "A die is used to produce external threads on a bolt."
    },
    {
        question: "The hammer used for light work to avoid damage to the surface of such component is called?",
        image: "",
        options: ["A. Soft hammer", "B. Sledge hammer", "C. Straight pen", "D. Ball Pein hammer"],
        answer: "A",
        explanation: "Soft hammer is used for light work to prevent damage."
    },
    {
        question: "The screw of a fitter’s bench vice is made of--------------------------------- thread",
        image: "",
        options: ["A. Square or buttress threads", "B. Ball pein", "C. Die", "D. Tap"],
        answer: "A",
        explanation: "Square or buttress threads are used on the vice screw."
    },
    {
        question: "An operation whereby a cylindrical pin with head is used to fasting two or more plates together is called---------",
        image: "",
        options: ["A. Welding operation", "B. Cross cutting operation", "C. Riveting operation", "D. Chipping and chiseling operation"],
        answer: "C",
        explanation: "This describes the Riveting operation."
    },
    {
        question: "Which of the following is a making out tools?",
        image: "",
        options: ["A. Micrometer screw gauge", "B. Engineer Square", "C. Steel rule", "D. Electrode holder"],
        answer: "B",
        explanation: "Engineer Square is a marking out tool."
    },
    {
        question: "The smaller hole found on the top surface of an anvil is called",
        image: "",
        options: ["A. Pinch hole", "B. Process hole", "C. Punch hole", "D. Flat surface"],
        answer: "C",
        explanation: "It is called the Punch hole."
    },
    {
        question: "To effectively carried out chiseling and chipping operation by a fitter you need chisel and",
        image: "",
        options: ["A. Snip", "B. Mallet", "C. Die stock", "D. Hammer"],
        answer: "D",
        explanation: "A hammer is required along with the chisel."
    },
    {
        question: "The parts of an hacksaw which enable the tensioning of the blade is called",
        image: "",
        options: ["A. Wing Nut", "B. But and Square nut", "C. Square thread", "D. Pin"],
        answer: "B",
        explanation: "But and Square nut is used for tensioning."
    },
    {
        question: "What is the effect of pinning in filling operation?",
        image: "",
        options: ["A. Lively easy cut", "B. Loss of cutting efficiency of the file", "C. Blow hole", "D. Dead smooth"],
        answer: "B",
        explanation: "Pinning causes loss of cutting efficiency."
    },
    {
        question: "To effectively hold a tool for cutting internal thread, you need",
        image: "",
        options: ["A. Tap Wrench", "B. Pliers", "C. Die stock", "D. Ring spanner"],
        answer: "A",
        explanation: "Tap Wrench is used to hold taps."
    },
    {
        question: "The followings are bench work and fitting auxiliary tools EXCEPT ………………",
        image: "",
        options: ["A. Tee- Block", "B. Set of spanner", "C. Wire brush", "D. Vee- block"],
        answer: "D",
        explanation: "Vee-block is a work holding device, not auxiliary in this context."
    },
    {
        question: "………………….. is a hard fibrous tissue found in many plants",
        image: "",
        options: ["A. Wood", "B. Fibre cellulose", "C. Cell walls", "D. Cellulose"],
        answer: "A",
        explanation: "Wood is a hard fibrous tissue found in plants."
    },
    {
        question: "Why it is that caliper cannot be used for direct measurement?",
        image: "",
        options: ["A. Too small for the purpose", "B. Too large for the purpose", "C. It is not calibrated", "D. For accuracy purpose"],
        answer: "C",
        explanation: "Calipers are not calibrated for direct measurement."
    },
    {
        question: "Which of the followings is a work holding device?",
        image: "",
        options: ["A. Anvil", "B. Bench Vice", "C. Screw driver", "D. Fitters bench"],
        answer: "B",
        explanation: "Bench Vice is a work holding device."
    },
    {
        question: "…………………. Is generally obtained from a tree with deciduous or broad leaves",
        image: "",
        options: ["A. Shisham", "B. Hardwood", "C. Softwood", "D. Bonded wood"],
        answer: "B",
        explanation: "Hardwood comes from deciduous trees."
    },
    {
        question: "........................................... is used for cutting sheet metals of various nature and thickness",
        image: "",
        options: ["A. Cutting blade", "B. Snip", "C. Anvil", "D. Tube cutter"],
        answer: "B",
        explanation: "Snips are used for cutting sheet metals."
    },
    {
        question: "The type of vice for holding tapered work piece is called ............................ vice.",
        image: "",
        options: ["A. Swift Rig", "B. Tap Wrench", "C. Swivel", "D. Tail stock"],
        answer: "C",
        explanation: "Swivel vice is used for tapered workpieces."
    },
    {
        question: "According to roughness ………...…file is excellent for hard metals.",
        image: "",
        options: ["A. First cut", "B. All", "C. First and second cut", "D. Second cut"],
        answer: "D",
        explanation: "Second cut file is excellent for hard metals."
    },
    {
        question: "Which of the following is not a type of file according to roughness?",
        image: "",
        options: ["A. Straight", "B. Smooth", "C. Bastard", "D. Second cut"],
        answer: "A",
        explanation: "Straight is not a roughness classification of files."
    },
    {
        question: "The blade of a hacksaw can be made of",
        image: "",
        options: ["A. High carbon steel", "B. Nickel-alloy steel", "C. carbon steel", "D. forged steel"],
        answer: "C",
        explanation: "Hacksaw blades are made of carbon steel."
    },
    {
        question: "Which of the following is not a part of a hacksaw?",
        image: "",
        options: ["A. Frame", "B. Peg", "C. Wing nut", "D. Handle"],
        answer: "B",
        explanation: "Peg is not a standard named part (pins/pegs are, but context points to B)."
    },
    {
        question: "One these is an example of Pin punches EXCEPT ……………………",
        image: "",
        options: ["A. Tapered", "B. Dot", "C. Centre", "D. Tap"],
        answer: "D",
        explanation: "Tap is not a type of pin punch."
    },
    {
        question: "Conversion of tree into a timber or wood log is called ………………..",
        image: "",
        options: ["A. Seasoning", "B. Salten", "C. Felling", "D. Cracking"],
        answer: "C",
        explanation: "Felling is the process of cutting down a tree."
    },
    {
        question: "Which of the following can be the length of a file used for light work?",
        image: "",
        options: ["A. 180 mm", "B. 210 mm", "C. 260 mm", "D. 300 mm"],
        answer: "A",
        explanation: "180 mm is suitable for light work."
    },
    {
        question: "Hammer can be used for the following operations except",
        image: "",
        options: ["A. Punching", "B. Chipping", "C. Riveting", "D. Sawing"],
        answer: "D",
        explanation: "Hammer is not used for sawing."
    },
    {
        question: "The part of the hacksaw which performs the function of holding hacksaw blade in position is called ...",
        image: "",
        options: ["A. Wing Nut", "B. Pins/Pegs", "C. Tension Saw", "D. Bolt and Nut"],
        answer: "B",
        explanation: "Pins/Pegs hold the blade."
    },
    {
        question: "The clogging of file teeth with small particles of metal there by reducing the cutting efficiency of the file is called ............",
        image: "",
        options: ["A. Pin Hole", "B. Pinning", "C. Pinn", "D. Plumb line"],
        answer: "B",
        explanation: "This is called Pinning."
    },
    {
        question: "The part labeled A in the figure below is called ....................................",
        image: "hammer_diagram.jpg",
        options: ["A. Pain", "B. Pin Head", "C. Eye", "D. Pein"],
        answer: "D",
        explanation: "Part A is the Pein of the hammer."
    },
    {
        question: "The part labeled B in the figure below is called.........",
        image: "hammer_diagram.jpg",
        options: ["A. Pein", "B. Eye", "C. Pein Eye", "D. Head"],
        answer: "B",
        explanation: "Part B is the Eye of the hammer."
    },
    {
        question: ".................................... is used for bending small rods that are round to form rigs, striking metal along its length.",
        image: "",
        options: ["A. Straight pein", "B. sledge hammer", "C. Ball pein", "D. None of the above."],
        answer: "C",
        explanation: "Ball pein hammer is used for that purpose."
    },
    {
        question: "All these are part of hammer EXCEPT ................",
        image: "",
        options: ["A. Head Stock", "B. Head", "C. Face", "D. Pein"],
        answer: "A",
        explanation: "Head Stock is not a part of a hammer."
    },
    {
        question: ".................................... is the removal of thick layers of metal by means of cold chisels.",
        image: "",
        options: ["A. Strips", "B. Chipping", "C. Flattening", "D. Anvil"],
        answer: "B",
        explanation: "This process is called Chipping."
    },
    {
        question: "The following tools are used during chiseling operation EXCEPT ............",
        image: "",
        options: ["A. Chisels", "B. Hammer", "C. Dies", "D. Anvils"],
        answer: "C",
        explanation: "Dies are not used in chiseling."
    },
    {
        question: "The following are type of punches EXCEPT ………………………………………",
        image: "",
        options: ["A. Centre punch", "B. Straight punches", "C. Pen punches", "D. Dot punches"],
        answer: "B",
        explanation: "Straight punches are not a standard type."
    },
    {
        question: "The body of a vice is fitted with ………………………………. Steel jaws",
        image: "",
        options: ["A. All of the above", "B. Semi-detachable", "C. Non detachable", "D. Detachable"],
        answer: "D",
        explanation: "Detachable steel jaws."
    },
    {
        question: "The following are type of vices EXCEPT …………………………",
        image: "",
        options: ["A. Optimum vice", "B. Bench vice", "C. Pin vice", "D. Swivel vice"],
        answer: "A",
        explanation: "Optimum vice is not a standard type."
    },
    {
        question: "One of these is not an example of chisel.",
        image: "",
        options: ["A. Quarter round chisel", "B. Diamond point chisels", "C. Cross cut chisel", "D. Round chisel"],
        answer: "D",
        explanation: "Round chisel is not a standard type."
    },
    {
        question: "The following are example of snips EXCEPT …………………………",
        image: "",
        options: ["A. Cross-cut snips", "B. Straight snips", "C. Curved snips", "D. Universal pattern snips"],
        answer: "A",
        explanation: "Cross-cut snips is not a standard snip type."
    },
    {
        question: "All these are part of a typical hacksaw EXCEPT ………………………",
        image: "",
        options: ["A. Hack saw blade", "B. Wing nut", "C. Hardie hole", "D. Tension screw"],
        answer: "C",
        explanation: "Hardie hole is part of an anvil, not hacksaw."
    },
    {
        question: "A hardened piece of high grade steel with slanting rows of teeth used to cut smooth or fit metal parts.",
        image: "",
        options: ["A. File", "B. Hacksaw", "C. Snips", "D. Dies"],
        answer: "A",
        explanation: "This describes a File."
    },
    {
        question: "The type of tap that is used for starting the thread is called ……………………",
        image: "",
        options: ["A. Plug tap", "B. Taper tap", "C. Taper dies", "D. All of the above"],
        answer: "B",
        explanation: "Taper tap is used for starting threads."
    },
    {
        question: "…………… is a finishing process that can obtain a degree of accuracy much higher than that obtained with chisel or file.",
        image: "",
        options: ["A. Welding", "B. Brazing", "C. Scrapping", "D. Riveting"],
        answer: "C",
        explanation: "Scrapping (scraping) is a high-accuracy finishing process."
    },
    {
        question: "The following are types of cleaning tools EXCEPT ……………………….",
        image: "",
        options: ["A. Wire guzzle", "B. Flexible scrapper", "C. Wire brush", "D. Bristle head"],
        answer: "A",
        explanation: "Wire guzzle is not a standard cleaning tool."
    },
    {
        question: "The type of solid dies for rectifying damage to existing threads or running an existing thread down to size is called ………",
        image: "",
        options: ["A. Die nuts", "B. Die heads", "C. Circular dies", "D. Rectangular dies"],
        answer: "A",
        explanation: "Die nuts are used for rectifying threads."
    },
    {
        question: "The following are types of files EXCEPT.",
        image: "",
        options: ["A. Triangular file", "B. Half -round file", "C. Semi-round file", "D. Knife-edge file"],
        answer: "C",
        explanation: "Semi-round file is not a standard classification."
    },
    {
        question: "……………………….. is the clogging of the file teeth with particles of metal causing the file to its cutting efficiency.",
        image: "",
        options: ["A. Pinning", "B. Filling", "C. Sizing", "D. Grinding"],
        answer: "A",
        explanation: "This is called Pinning."
    },
    {
        question: "Which of the following tools does not belong in the group",
        image: "",
        options: ["A. Hammer", "B. Scrapper", "C. Lathe", "D. Hacksaw"],
        answer: "C",
        explanation: "Lathe is a machine tool, others are hand tools."
    },
    {
        question: "The accuracy of the pedestal grinding machine is ………………………",
        image: "",
        options: ["A. 0.2 mm", "B. 0.025 mm", "C. 0.0025 mm", "D. 0.52 mm"],
        answer: "B",
        explanation: "0.025 mm accuracy."
    },
    {
        question: "When ordering a file, you must know it’s; I. length II. Degree of roughness III. Shape. IV. Type of cut",
        image: "",
        options: ["A. I only", "B. I and II only", "C. I, III and IV only", "D. All of the above"],
        answer: "D",
        explanation: "All factors are important when ordering a file."
    },
    {
        question: "-------------- stores fuel in the vehicle",
        image: "",
        options: ["A. Fuel tank", "B. Fluid sump", "C. Water tank", "D. Oil sump"],
        answer: "A",
        explanation: "Fuel tank stores fuel in the vehicle."
    },
    {
        question: "---------- stores lubricating oil in the vehicle",
        image: "",
        options: ["A. Grease sump", "B. Water sump", "C. Oil sump", "D. Oil pump"],
        answer: "C",
        explanation: "Oil sump stores lubricating oil."
    },
    {
        question: "------ transfers lubricating oil from the oil sump to the lubricating part.",
        image: "",
        options: ["A. Oil pump", "B. Oil sump", "C. Water pump", "D. Grease pump"],
        answer: "A",
        explanation: "Oil pump transfers lubricating oil."
    },
    {
        question: "------- regulates the temperature of the engine",
        image: "",
        options: ["A. Hygrometer", "B. Thermometer", "C. Thermistor", "D. Thermostat"],
        answer: "D",
        explanation: "Thermostat regulates engine temperature."
    },
    {
        question: "--------- prevents water in the radiator not to reach boiling point",
        image: "",
        options: ["A. Pressure cap", "B. Radiator cap", "C. Temperature cap", "D. Radiator cover"],
        answer: "B",
        explanation: "Radiator cap (pressure cap) prevents boiling."
    },
    {
        question: "----------- cools the hot water in the radiator",
        image: "",
        options: ["A. Radiating Fan", "B. Fan blade", "C. Cooling fan", "D. Ceiling fan"],
        answer: "C",
        explanation: "Cooling fan cools the radiator."
    },
    {
        question: "Petrol engine uses ------------- fuel system",
        image: "",
        options: ["A. Carburetion", "B. Injection", "C. Respiration", "D. Circulation"],
        answer: "A",
        explanation: "Carburetion system for petrol engines."
    },
    {
        question: "-------- Filters dirt from the lubricating oil in the vehicle engine",
        image: "",
        options: ["A. Oil Filter", "B. Grease Filter", "C. Candle Filter", "D. Water Filter"],
        answer: "A",
        explanation: "Oil Filter."
    },
    {
        question: "Diesel engine uses ------------- fuel system",
        image: "",
        options: ["A. Carburetion", "B. Injection", "C. Respiration", "D. Circulation"],
        answer: "B",
        explanation: "Injection system for diesel engines."
    },
    {
        question: "------- removes dirt from the fuel in the vehicle engine",
        image: "",
        options: ["A. Oil Filter", "B. Grease Filter", "C. Candle Filter", "D. Fuel Filter"],
        answer: "D",
        explanation: "Fuel Filter."
    },
    {
        question: "----- screen dirt particles from the air in the vehicle engine",
        image: "",
        options: ["A. Oil Filter", "B. Air Filter", "C. Grease Filter", "D. Fuel Filter", "E. Water Filter"],
        answer: "B",
        explanation: "Air Filter."
    },
    {
        question: "The following are the parts of the spark plug expect",
        image: "",
        options: ["A. insulator", "B. gasket", "C. terminal", "D. Spark cap"],
        answer: "D",
        explanation: "Spark cap is not a standard part of spark plug."
    },
    {
        question: "--------- prevents overheating of the engine",
        image: "",
        options: ["A. cylinder gasket", "B. cylinder head", "C. cylinder engine", "D. cylinder jacket"],
        answer: "D",
        explanation: "Cylinder jacket (cooling jacket)."
    },
    {
        question: "One of the functions of the lubricating oil is to ----------",
        image: "",
        options: ["A. reduce friksion", "B. reduce friction", "C. reduce fusion", "D. Reduce friction"],
        answer: "B",
        explanation: "Reduce friction."
    },
    {
        question: "------ disconnects the engine from the transmission for the smooth engagement of the drive",
        image: "",
        options: ["A. clutch", "B. gear", "C. plate", "D. brake"],
        answer: "A",
        explanation: "Clutch."
    },
    {
        question: "------ allows the engine to run at different relative speed to the road wheels",
        image: "",
        options: ["A. selector", "B. gear", "C. pedal", "D. clutch"],
        answer: "B",
        explanation: "Gear (gearbox)."
    },
    {
        question: "------- is used to control the movement of the vehicle",
        image: "",
        options: ["A. steering", "B. tyre", "C. rim", "D. wheel"],
        answer: "A",
        explanation: "Steering."
    },
    {
        question: "Two types of tyre that we have are ------",
        image: "",
        options: ["A. hard and soft", "B. radial and cross-ply", "C. alloy and Steel", "D. smooth and rough"],
        answer: "B",
        explanation: "Radial and cross-ply tyres."
    },
    {
        question: "A typical modern tyre marking is 18570SR13, 185 means the tyre",
        image: "",
        options: ["A. width in millimeters", "B. percent of its width", "C. radial type", "D. diameter"],
        answer: "A",
        explanation: "185 is the width in millimeters."
    },
    {
        question: "A typical modern tyre marking is 18570SR13, 70 means",
        image: "",
        options: ["A. width in millimeters", "B. percent of its width", "C. radial type", "D. diameter"],
        answer: "B",
        explanation: "70 is the aspect ratio (percent of width)."
    },
    {
        question: "A typical modern tyre marking is 18570SR13, R means that the tyre is",
        image: "",
        options: ["A. width in millimeters", "B. percentage of its width", "C. radial type", "D. diameter"],
        answer: "C",
        explanation: "R stands for Radial type."
    },
    {
        question: "The green colour in the hydrometer to test for the specific gravity of battery electrolyte indicates that the battery is……………………..",
        image: "",
        options: ["A. good", "B. bad", "C. fair", "D. very fair"],
        answer: "A",
        explanation: "Green indicates good battery charge."
    },
    {
        question: "The white colour in the hydrometer to test for the specific gravity of battery electrolyte indicates that the battery is…………",
        image: "",
        options: ["A. good", "B. bad", "C. weak", "D. not ok"],
        answer: "B",
        explanation: "White indicates bad/weak battery."
    },
    {
        question: "The red colour in the hydrometer to test for the specific gravity of battery electrolyte indicates that the battery is……………",
        image: "",
        options: ["A. good", "B. bad", "C. fair", "D. very fair"],
        answer: "B",
        explanation: "Red indicates bad battery."
    },
    {
        question: "What is the proper word among this pair of words? (Hand brake; Parking brake; service brake; stopping)",
        image: "",
        options: ["A. Hand brake", "B. Parking brake", "C. Service brake", "D. Parking & Service brake"],
        answer: "B",
        explanation: "Parking brake is the standard term."
    },
    {
        question: "A typical modern tyre has a marking of “185/70SR15”. What is the width of the tyre?",
        image: "",
        options: ["A. 70", "B. 185", "C. 70S", "D. 15"],
        answer: "B",
        explanation: "185 is the width in mm."
    },
    {
        question: ".................... is a device for delivering electric current from an ignition system to the combustion chamber of a spark-ignition engine.",
        image: "",
        options: ["A. Battery", "B. alternator", "C. spark plug", "D. wire conductor"],
        answer: "C",
        explanation: "Spark plug."
    },
    {
        question: "A cold spark plug is used in engines operated at high speeds.",
        image: "",
        options: ["A. FALSE", "B. TRUE", "C. Not Sure", "D. None of the Above"],
        answer: "B",
        explanation: "True - Cold plugs for high-speed engines."
    },
    {
        question: "Hot spark plug has.................... insulator tip that prevents heat transfer into the water jackets",
        image: "",
        options: ["A. a shorter", "B. a long", "C. Short and Long", "D. None of the above"],
        answer: "B",
        explanation: "Long insulator tip for hot plugs."
    },
    {
        question: "What is the name of the component labeled S in Figure below.",
        image: "engine_diagram.jpg",
        options: ["A. Piston", "B. spark plug", "C. cylinder", "D. inlet valve"],
        answer: "B",
        explanation: "Spark plug (S)."
    },
    {
        question: "What is the name of the component labeled V in Figure below.",
        image: "engine_diagram.jpg",
        options: ["A. Piston", "B. spark plug", "C. cylinder", "D. valves"],
        answer: "D",
        explanation: "Valves."
    },
    {
        question: "What is the name of the component labeled E in Figure below.",
        image: "engine_diagram.jpg",
        options: ["A. Piston", "B. spark plug", "C. cylinder", "D. exhaust valve"],
        answer: "D",
        explanation: "Exhaust valve."
    },
    {
        question: "What is the name of the component labeled I in Figure below.",
        image: "engine_diagram.jpg",
        options: ["A. Piston", "B. spark plug", "C. cylinder", "D. inlet valve"],
        answer: "D",
        explanation: "Inlet valve."
    },
    {
        question: "Four stroke spark ignition engines require ----------------- piston strokes to complete one cycle",
        image: "",
        options: ["A. One", "B. two", "C. three", "D. four"],
        answer: "D",
        explanation: "Four strokes."
    },
    {
        question: "The more speed of a vehicle the more the fuel consumption rate.",
        image: "",
        options: ["A. FALSE", "B. TRUE", "C. Not Sure", "D. None of the Above"],
        answer: "B",
        explanation: "True."
    },
    {
        question: "All options given below indicate the symptom for a battery in a low state of charge except",
        image: "",
        options: ["A. Low hydrometer reading", "B. lack of power when starting", "C. burnt out bulbs", "D. poor light from the lamps"],
        answer: "C",
        explanation: "Burnt out bulbs is not a direct symptom of low charge."
    },
    {
        question: "The …………… Consists of a differential unit which provides final gear reduction to increase out put torque.",
        image: "",
        options: ["A. Rear Axle", "B. Propeller Shaft", "C. Gear Box", "D. None of the above"],
        answer: "A",
        explanation: "Rear Axle."
    },
    {
        question: "………………………… is a hollow shaft that transmit power from the gear box to the rear axle.",
        image: "",
        options: ["A. Rear Axle", "B. Propeller Shaft", "C. Gear Box", "D. None of the above"],
        answer: "B",
        explanation: "Propeller Shaft."
    },
    {
        question: "A system that converts the heat energy in fuel to mechanical power is …………………",
        image: "",
        options: ["A. Fuel Ignition", "B. Fuel Engine", "C. Heat Engine", "D. None of the above"],
        answer: "C",
        explanation: "Heat Engine."
    },
    {
        question: "………… provides a suitable electrical spark to initiate combustion during the power stroke",
        image: "",
        options: ["A. Ignition System", "B. Spark system", "C. Clutch system", "D. Brake System"],
        answer: "A",
        explanation: "Ignition System."
    },
    {
        question: "The purpose of ……………………….. is to ensure that the spark is initiated at the precise time to the correct cylinder.",
        image: "",
        options: ["A. Valve timing", "B. Chain timing", "C. Ignition timing", "D. Clutch timing"],
        answer: "C",
        explanation: "Ignition timing."
    },
    {
        question: "The type of tyre that has 2 to 3 layers of cords at an angle of between 80o and 90o is ………",
        image: "",
        options: ["A. Cross Ply", "B. Radial Ply", "C. Straight Ply", "D. Random Ply"],
        answer: "A",
        explanation: "Cross Ply."
    },
    {
        question: "The charging system involves the following EXCEPT ………………………",
        image: "",
        options: ["A. Alternator", "B. Wiring", "C. Battery", "D. Clutch"],
        answer: "D",
        explanation: "Clutch is not part of charging system."
    },
    {
        question: "The lubrication system consists of the following EXCEPT ………………",
        image: "",
        options: ["A. Oil Separator", "B. Oil Filter", "C. Oil Sump", "D. Oil Pump"],
        answer: "A",
        explanation: "Oil Separator is not standard in basic system."
    },
    {
        question: "The following are types of saw except ....................",
        image: "",
        options: ["A. Coping saw", "B. Mopping saw", "C. Keyhole saw", "D. Dovetail saw"],
        answer: "B",
        explanation: "Mopping saw is not a real type."
    },
    {
        question: "The piston inside the cylinder is connected to the crankshaft via",
        image: "",
        options: ["A. Connecting rod", "B. Camshaft", "C. Spark plug", "D. Flywheel"],
        answer: "A",
        explanation: "Connecting rod."
    },
    {
        question: "Which of the following is an example of halogenated refrigerant?",
        image: "",
        options: ["A. C3H8", "B. NH3", "C. CCl2F2", "D. H2O"],
        answer: "C",
        explanation: "CCl2F2 (R-12) is a halogenated refrigerant."
    },
    {
        question: "Heat exchanger that removes heat from the hot refrigerant vapour and changes its phase back to liquid is?",
        image: "",
        options: ["A. Evaporator", "B. Expander", "C. Refrigerant", "D. Condenser"],
        answer: "D",
        explanation: "Condenser."
    },
    {
        question: "A system which can be used to achieve lower temperature than the surroundings is called",
        image: "",
        options: ["A. Refrigerator", "B. Air-conditioning", "C. Refrigeration", "D. Compressor"],
        answer: "A",
        explanation: "Refrigerator."
    },
    {
        question: "Refrigerating effect in the refrigerating system can be obtained from device called …",
        image: "",
        options: ["A. Evaporator", "B. Evaporative cooling", "C. Evaporative Heating", "D. Evaporating Medium"],
        answer: "A",
        explanation: "Evaporator."
    },
    {
        question: "The component in the Refrigeration system that is responsible for raising both the pressure and temperature of refrigerant vapour is called ……………………………….",
        image: "",
        options: ["A. Compression", "B. Expansion", "C. Compressor", "D. Evaporator"],
        answer: "C",
        explanation: "Compressor."
    },
    {
        question: "An instrument mostly used in refrigeration and air-conditioning is ………………….",
        image: "",
        options: ["A. Vernier Caliper", "B. Dividing head", "C. Try square", "D. Manifold gauge"],
        answer: "D",
        explanation: "Manifold gauge."
    },
    {
        question: "Refrigeration is achieved through the following methods except ……………………………",
        image: "",
        options: ["A. Vapour Jet", "B. Vapour Compression", "C. Vapour Adsorbent", "D. Vortex/Pulse system."],
        answer: "D",
        explanation: "Vortex/Pulse system is less common."
    },
    {
        question: "…………….. is regarded as the best method of detecting leakage in all refrigerating system.",
        image: "",
        options: ["A. Electronic leakage detector", "B. Soap bubble method", "C. Halide torch method", "D. Sulphur candle method."],
        answer: "A",
        explanation: "Electronic leakage detector."
    },
    {
        question: "………………………… is a Heat transfer surface in which a volatile liquid is vaporized for the purpose of removing heat from the refrigerated space or product.",
        image: "",
        options: ["A. Evaporative cooler", "B. Condensate", "C. Evaporator", "D. Shell and Tube"],
        answer: "C",
        explanation: "Evaporator."
    },
    {
        question: "Which of the following is NOT part of compressor?",
        image: "",
        options: ["A. Suction port.", "B. Discharge port", "C. Charging port", "D. Release port"],
        answer: "D",
        explanation: "Release port is not standard."
    },
    {
        question: "…………… is a process of cooling a metal very quickly.",
        image: "",
        options: ["A. Quenching", "B. Normalizing", "C. Aging", "D. Annealing"],
        answer: "A",
        explanation: "Quenching."
    },
    {
        question: "The type of material used in the construction of the condensing unit is …………",
        image: "",
        options: ["A. Iron", "B. Aluminium", "C. Copper", "D. Sif-bronze alloy"],
        answer: "C",
        explanation: "Copper."
    },
    {
        question: "Which of the following does NOT apply to Refrigeration and Air-conditioning operation?",
        image: "",
        options: ["A. Charging", "B. Flaring", "C. Brazing", "D. Facing"],
        answer: "D",
        explanation: "Facing is not typical."
    },
    {
        question: "The following refrigerants are considered toxic to the environment except…………",
        image: "",
        options: ["A. R-134a", "B. R-134", "C. R-12", "D. Ammonia"],
        answer: "A",
        explanation: "R-134a is more environmentally friendly than older ones."
    },
    {
        question: "The system of refrigeration that source its power from natural power source is called …",
        image: "",
        options: ["A. Vapour Compression System", "B. Solar Refrigerator", "C. Vapour Jet", "D. Air Refrigeration"],
        answer: "B",
        explanation: "Solar Refrigerator."
    },
    {
        question: "All these components are major components of the vapour compression system except …",
        image: "",
        options: ["A. Liquid receiver", "B. Condenser", "C. Expansion device", "D. Evaporator"],
        answer: "A",
        explanation: "Liquid receiver is optional in some systems."
    },
    {
        question: "A process that involves the use of energy and it is not a spontaneous process is called …",
        image: "",
        options: ["A. Cooling", "B. Air-conditioning", "C. Refrigeration", "D. Heat Pump"],
        answer: "C",
        explanation: "Refrigeration."
    },
    {
        question: "The treatment of air to control its temperature, humidity, cleanliness, odour and circulation is referred to as …………….",
        image: "",
        options: ["A. Air-conditioning", "B. Conditioned space", "C. Refrigerated Space", "D. An Enclosure"],
        answer: "A",
        explanation: "Air-conditioning."
    },
    {
        question: "……………………… is the type of refrigeration and air-conditioning that involves vehicular, marine, vessels and air cargo transportation.",
        image: "",
        options: ["A. Mobile Application", "B. Industrial Application", "C. Household Application", "D. Domestic Application"],
        answer: "A",
        explanation: "Mobile Application."
    },
    {
        question: "……………. are suitable for cutting steel up to 1,25mm in thickness.",
        image: "",
        options: ["A. Snips", "B. Guillotines", "C. Hacksaw", "D. Chiseling"],
        answer: "A",
        explanation: "Snips."
    },
    {
        question: "One of these refrigerants is not a synthetic refrigerant.",
        image: "",
        options: ["A. HFC", "B. CFC", "C. HCFC", "D. NH3"],
        answer: "D",
        explanation: "NH3 (Ammonia) is natural."
    },
    {
        question: "Refrigerants that consists of two or more different chemical compounds are called ……",
        image: "",
        options: ["A. Mixtures", "B. Natural", "C. Synthetic", "D. Halogenated"],
        answer: "A",
        explanation: "Mixtures."
    },
    {
        question: "The chemical formula C2H2F4 represents a refrigerant called ………………",
        image: "",
        options: ["A. R-134", "B. R-600", "C. R-134a", "D. R-143a"],
        answer: "C",
        explanation: "R-134a."
    },
    {
        question: "The chlorofluorocarbon refrigerants are being replaced or phased out as they are found to ………",
        image: "",
        options: ["A. Be Expensive", "B. Cause Ozone Layer Depletion", "C. Reacts with Products", "D. Consume More Energy"],
        answer: "B",
        explanation: "Cause Ozone Layer Depletion."
    },
    {
        question: "The following are considered as positive displacement type of compressor except ……",
        image: "",
        options: ["A. Radial flow", "B. Rotary", "C. Reciprocating", "D. Acoustic"],
        answer: "D",
        explanation: "Acoustic is not a standard type."
    },
    {
        question: "……………………….. is a type of condensing unit that uses both air and water as its cooling medium.",
        image: "",
        options: ["A. Air-cooled condenser", "B. Air-water cooled condenser", "C. Water-vapour condenser", "D. Evaporative condenser"],
        answer: "D",
        explanation: "Evaporative condenser."
    },
    {
        question: "……………………… is a device that reduces the condenser pressure to evaporator pressure and regulates the flow of refrigerant.",
        image: "",
        options: ["A. Evaporator", "B. Expansion device", "C. Condenser", "D. Liquid receiver"],
        answer: "B",
        explanation: "Expansion device."
    },
    {
        question: "Compared to hermetic compressor, an open compressor offers the following except ……",
        image: "",
        options: ["A. Better compressor cooling", "B. Lower noise", "C. Serviceability and flexibility", "D. Higher efficiency"],
        answer: "B",
        explanation: "Open compressors are usually noisier."
    },
    {
        question: "Air conditioning involves the following process except......................................",
        image: "",
        options: ["A. Heating", "B. Contraction", "C. Humidification", "D. Expansion"],
        answer: "B",
        explanation: "Contraction is not a standard process."
    },
    {
        question: "The main applications of refrigeration and air-conditioning in industries involve the following except..............",
        image: "",
        options: ["A. Desalination of water", "B. Separation of gases", "C. Food processing", "D. Condensation of water"],
        answer: "D",
        explanation: "Condensation of water is not primary."
    },
    {
        question: "Condensers are classified as follows except....................................",
        image: "",
        options: ["A. Water Cooled condenser", "B. Natural and forced Condenser", "C. Air cooled Condenser", "D. Evaporative condenser"],
        answer: "B",
        explanation: "Natural and forced is a sub-category."
    },
    {
        question: "Which of the following is not a type of evaporator?",
        image: "",
        options: ["A. Shell and coil type", "B. Flooded type", "C. Natural and forced Convection type", "D. Baudelot type."],
        answer: "D",
        explanation: "Baudelot type is less common in this context."
    },
    {
        question: "The following are functions of evaporator in refrigerating systems except................",
        image: "",
        options: ["A. It aid refrigerating effect system", "B. Absorption of heat from the refrigerated space", "C. Rejection of heat from the refrigerated space", "D. Boils the refrigerant in the refrigeration system"],
        answer: "C",
        explanation: "Rejection of heat is done by condenser."
    },
    {
        question: "Which of the following is not positive displacement type compressor?",
        image: "",
        options: ["A. Centrifugal compressor", "B. Rotary vane compressor", "C. Direct and flat plate compressor", "D. Orbital compressor"],
        answer: "A",
        explanation: "Centrifugal is dynamic type."
    },
    {
        question: "The mass flow rate of refrigerant in the refrigeration is controlled by.......................",
        image: "",
        options: ["A. Condenser", "B. Evaporator", "C. Expansion device", "D. Compressor"],
        answer: "C",
        explanation: "Expansion device."
    },
    {
        question: "Car radiator is of which of the following condenser type.........................................",
        image: "",
        options: ["A. Air cooled", "B. Evaporative", "C. Water cooled", "D. Oil separator"],
        answer: "A",
        explanation: "Air cooled."
    },
    {
        question: "Ozone layer depletion is mostly caused by which of the following type of refrigerants?",
        image: "",
        options: ["A. Natural Refrigerant", "B. Hydrocarbons", "C. CFCs", "D. Organic (HCs)"],
        answer: "C",
        explanation: "CFCs."
    },
    {
        question: "The chemical formula of refrigerant R134a is?",
        image: "",
        options: ["A. CHF", "B. CCl3F", "C. C₂H₂F₄", "D. CCl₂F₂"],
        answer: "C",
        explanation: "C₂H₂F₄."
    },
    {
        question: "Refrigerant selection for a particular application in refrigeration and air conditioning system is based on the following properties except.",
        image: "",
        options: ["A. Environmental and safety properties", "B. Economic properties", "C. Ozone Depletion and Global Warming Potential properties", "D. Thermo-Physical properties"],
        answer: "B",
        explanation: "Economic is secondary."
    },
    {
        question: "Arrangement of compressor motor or external drive includes the following except.",
        image: "",
        options: ["A. Close type", "B. Semi-hermetic", "C. Open type", "D. Hermetic type"],
        answer: "A",
        explanation: "Close type is not standard."
    },
    {
        question: "The art of refrigeration can be achieved through the following type of system except..",
        image: "",
        options: ["A. Vortex Refrigeration system", "B. Air- Refrigeration system", "C. Vapour Jet Refrigeration system", "D. Evaporation Refrigeration system"],
        answer: "D",
        explanation: "Evaporation is part of others."
    },
    {
        question: "The diagram below is called ....................",
        image: "refrigeration_diagram.jpg",
        options: ["A. Liquid receiver", "B. Dryer", "C. Copper tube", "D. Shell and coil"],
        answer: "A",
        explanation: "Liquid receiver."
    },
    {
        question: "Condensation of vapour into liquid in condenser unit takes place by...........",
        image: "",
        options: ["A. Natural convection to the heat sink", "B. Liquid expansion to the heat sink", "C. Heat rejection to the heat sink", "D. Heat absorption to the heat sink"],
        answer: "C",
        explanation: "Heat rejection."
    },
    {
        question: "The chemical formula of refrigerant R12 is.",
        image: "",
        options: ["A. CHF", "B. CCl3F", "C. C2H2F4", "D. CCl2F2"],
        answer: "D",
        explanation: "CCl2F2."
    },
    {
        question: "A system which can be used to achieve lower temperature than the surroundings is called",
        image: "",
        options: ["A. Thermo-electric", "B. Pulse- jet system", "C. Refrigeration system", "D. Compression system"],
        answer: "C",
        explanation: "Refrigeration system."
    },
    {
        question: "The component of refrigerating system responsible for moisture removal is called",
        image: "",
        options: ["A. Evaporator", "B. Expander", "C. Dryer", "D. Condenser"],
        answer: "C",
        explanation: "Dryer."
    },
    {
        question: "In which of the following state can refrigerant exist in refrigerating system",
        image: "",
        options: ["A. Liquid & Vapour", "B. Solid & Gas", "C. Solid and Liquid", "D. Gas & Vapour"],
        answer: "A",
        explanation: "Liquid & Vapour."
    },
    {
        question: "The classification of compressor based on trapping a certain volume of gas in a cylinder that is continuously reduced by the compressing device is called",
        image: "",
        options: ["A. Positive displacement", "B. Roto-dynamic", "C. Hermetic sealed", "D. Working principles"],
        answer: "A",
        explanation: "Positive displacement."
    },
    {
        question: "Which of the following type of Air conditioning system finds application in refrigeration system?",
        image: "",
        options: ["A. Winter Air conditioning", "B. Refrigeration", "C. Summer Air conditioning", "D. Cooling system"],
        answer: "B",
        explanation: "Refrigeration."
    },
    {
        question: "The type of compressor that houses both the motor and compressing housing inside the same steel shell welded together is called",
        image: "",
        options: ["A. Positive displacement compressor", "B. Rotor-dynamic", "C. Hermetic compressor", "D. Open compressor"],
        answer: "C",
        explanation: "Hermetic compressor."
    },
    {
        question: "The correct way of designating CCl3F refrigerant is?",
        image: "",
        options: ["A. R12", "B. R13", "C. R22", "D. R11"],
        answer: "D",
        explanation: "R11."
    },
    {
        question: "The Capillary tube ……………………………………………….",
        image: "",
        options: ["A. reduces the high pressure in the liquid line to the low pressure in the evaporator", "B. equalizes the low pressure in the dryer liquid line with that of the discharge line in the condenser", "C. increases the high pressure in the liquid line to the high pressure in the evaporator", "D. equalizes the low pressure in the gaseous line to the low pressure in the condenser."],
        answer: "A",
        explanation: "Reduces pressure."
    },
    {
        question: "Compressor is a device for …………………………………………..",
        image: "",
        options: ["A. equalizing pressure between condenser and dryer", "B. increasing the pressure and temperature of the refrigerant", "C. creating pressure difference between condenser and evaporator", "D. causing phase change of refrigerant in Refrigeration and Air-conditioning systems"],
        answer: "B",
        explanation: "Increasing pressure and temperature."
    },
    {
        question: "The flowing of refrigerant through a refrigerating system occurs in the following order:",
        image: "",
        options: ["A. compressor-dryer-expansion valve-condenser-evaporator", "B. Compressor-condenser-expansion valve-dryer-evaporator", "C. compressor-condenser-expansion valve-evaporator-dryer", "D. compressor-condenser-dryer-expansion valve-evaporator"],
        answer: "D",
        explanation: "Compressor → Condenser → Dryer → Expansion valve → Evaporator."
    },
    {
        question: "The likelihood of an undesired event with specified consequence occurring within a specified period, or in a specified environment is called",
        image: "",
        options: ["A. Hazard", "B. Safety", "C. Accident", "D. Risk"],
        answer: "D",
        explanation: "Risk."
    },
    {
        question: "Charging of refrigerating/air-conditioning system is achieved with the use of ............",
        image: "",
        options: ["A. Manifold gauge", "B. multifold gauge", "C. Manifold gauge", "D. Mamifold gauge"],
        answer: "A",
        explanation: "Manifold gauge."
    },
    {
        question: "The appropriate method of joining tube in Refrigeration Air-conditioning system is",
        image: "",
        options: ["A. Brazing", "B. Welding", "C. soldering", "D. smelting"],
        answer: "A",
        explanation: "Brazing."
    },
    {
        question: "The part labeled 5 in the figure below is called ............................",
        image: "refrigeration_unit.jpg",
        options: ["A. Evaporator", "B. Condenser fan", "C. Evaporator fan", "D. Compressor"],
        answer: "D",
        explanation: "Compressor."
    },
    {
        question: "The part labeled 1 in the figure below is called ....................................",
        image: "refrigeration_unit.jpg",
        options: ["A. Evaporator", "B. Condenser fan", "C. Evaporator fan", "D. Compressor"],
        answer: "A",
        explanation: "Evaporator."
    },
    {
        question: "The part labeled 3 in the figure below is called ....................................",
        image: "refrigeration_unit.jpg",
        options: ["A. Evaporator", "B. Condenser fan", "C. Evaporator fan", "D. Condenser"],
        answer: "D",
        explanation: "Condenser."
    },
    {
        question: "The part labeled 2 in the figure below is called ....................................",
        image: "refrigeration_unit.jpg",
        options: ["A. Evaporator", "B. Condenser fan", "C. Evaporator fan", "D. Compressor"],
        answer: "C",
        explanation: "Evaporator fan."
    },
    {
        question: "The part labeled 4 in the figure above is called ....................................",
        image: "refrigeration_unit.jpg",
        options: ["A. Evaporator", "B. Condenser fan", "C. Evaporator fan", "D. Compressor"],
        answer: "B",
        explanation: "Condenser fan."
    },
    {
        question: "The chemical formula of Ammonia refrigerant is ………………………..",
        image: "",
        options: ["A. R 717", "B. R 708", "C. R 707", "D. R 807"],
        answer: "A",
        explanation: "Ammonia is designated as R-717."
    },
    {
        question: "Overload protector in a refrigeration system is located in the",
        image: "",
        options: ["A. control panel", "B. liquid receiver", "C. evaporator outlet", "D. compressor terminal"],
        answer: "D",
        explanation: "Compressor terminal."
    },
    {
        question: "Joining of refrigeration copper pipe is done by…………………………….",
        image: "",
        options: ["A. brazing", "B. welding", "C. screwing", "D. riveting"],
        answer: "A",
        explanation: "Brazing is the standard method."
    },
    {
        question: "The merit of installing the suction pipe downwards is to………………",
        image: "",
        options: ["A. reduce operation cost", "B. increase pumping efficiency", "C. Ensure effective discharge pressure", "D. enhance oil return"],
        answer: "D",
        explanation: "Enhance oil return."
    },
    {
        question: "Which of the following control is popular with domestic refrigeration unit",
        image: "",
        options: ["A. automatic expansion valve", "B. thermostatic expansion valve", "C. capillary tube", "D. high side float"],
        answer: "C",
        explanation: "Capillary tube is common in domestic units."
    },
    {
        question: "Which of the following is not used for servicing a window air conditioner……",
        image: "",
        options: ["A. screw driver", "B. pliers", "C. pipe wrench", "D. Allen key"],
        answer: "C",
        explanation: "Pipe wrench is rarely used."
    },
    {
        question: "The component that changes refrigerant from liquid to vapour is………..",
        image: "",
        options: ["A. control", "B. evaporator", "C. Condenser", "D. Drier"],
        answer: "B",
        explanation: "Evaporator."
    },
    {
        question: "The condensing medium used in evaporative condenser is",
        image: "",
        options: ["A. air only", "B. water only", "C. both air and water", "D. refrigerant"],
        answer: "C",
        explanation: "Both air and water."
    },
    {
        question: "A condenser is used in …………………. Pressure side of a refrigeration system",
        image: "",
        options: ["A. low", "B. high", "C. both high and low", "D. intermediate"],
        answer: "B",
        explanation: "High pressure side."
    },
    {
        question: "The refrigerant supplied to a compressor must be …………………………….",
        image: "",
        options: ["A. superheated vapour refrigerant", "B. dry saturated liquid refrigerant", "C. a mixture of liquid and vapour refrigerant", "D. none of the above"],
        answer: "A",
        explanation: "Superheated vapour refrigerant."
    },
    {
        question: "The pressure at the inlet of a refrigerant compressor is called……………",
        image: "",
        options: ["A. suction pressure", "B. discharge pressure", "C. Critical pressure", "D. back pressure"],
        answer: "A",
        explanation: "Suction pressure."
    },
    {
        question: "A compressor is used to………………………………………..",
        image: "",
        options: ["A. raise the pressure of the refrigerant", "B. raise the temperature of the refrigerant", "C. circulate the refrigerant through the refrigerating system", "D. all of the above"],
        answer: "D",
        explanation: "All of the above."
    },
    {
        question: "The highest temperature during the cycle in a vapour compression refrigeration system occurs after…………….",
        image: "",
        options: ["A. compression", "B. condensation", "C. expansion", "D. evaporation"],
        answer: "A",
        explanation: "After compression."
    },
    {
        question: "The sub-cooling is a process of cooling the refrigerant in vapour compression refrigeration system ……",
        image: "",
        options: ["A. before compression", "B. after compression", "C. before throttling", "D. after throttling"],
        answer: "C",
        explanation: "Before throttling."
    },
    {
        question: "…………… is the control of temperature, humidity, air cleanliness and its distribution to meet the comfort requirements of human beings and industrial requirements.",
        image: "",
        options: ["A. Comfort cooling", "B. Air-conditioning", "C. Refrigeration", "D. All of the above"],
        answer: "B",
        explanation: "Air-conditioning."
    },
    {
        question: "The chemical name of Refrigerant 12 is ……………………………………….",
        image: "",
        options: ["A. Dichloromonofluoromethane", "B. Monochlorodifluoromethane", "C. Dichlorodifluoromethne", "D. None of the above"],
        answer: "C",
        explanation: "Dichlorodifluoromethane."
    },
    {
        question: "The full meaning of VCRS is ……………………………………………",
        image: "",
        options: ["A. Vast cooling refrigeration systems", "B. Vapour condensing refrigeration systems", "C. Vapour compressor refrigeration systems", "D. Vapour compression refrigeration systems"],
        answer: "D",
        explanation: "Vapour compression refrigeration systems."
    },
    {
        question: "The following are the classification of positive displacement type of compressors except …………………………….",
        image: "",
        options: ["A. Reciprocating", "B. Radial flow", "C. Orbital", "D. Rotary"],
        answer: "B",
        explanation: "Radial flow is a dynamic compressor."
    },
    {
        question: "……………………….. is the type of compressor that has the motor and the compressor enclosed in the same housing to prevent leakage.",
        image: "",
        options: ["A. Hermetic", "B. Semi-hermetic", "C. Open Hermetic", "D. Twin screw"],
        answer: "A",
        explanation: "Hermetic compressor."
    },
    {
        question: "…………………………………… is the place at which the desired refrigerating effect of a refrigerator or air-conditioner is achieved.",
        image: "",
        options: ["A. Evaporator", "B. Condenser", "C. Expansion device", "D. Compressor"],
        answer: "A",
        explanation: "Evaporator."
    },
    {
        question: "The type of compressor that offers flexibility and serviceability is called ………",
        image: "",
        options: ["A. Open type", "B. Semi-hermetic", "C. Hermetic", "D. Twin screw"],
        answer: "A",
        explanation: "Open type compressor."
    },
    {
        question: "……………………………………. is the part of refrigeration system that houses both the refrigerant and the lubricating oil.",
        image: "",
        options: ["A. Expansion device", "B. Compressor", "C. Condenser", "D. Evaporator"],
        answer: "B",
        explanation: "Compressor."
    },
    {
        question: "…… and ……….. are the two methods of charging refrigerant into a system.",
        image: "",
        options: ["A. Water and Vapour", "B. Gas and vapour", "C. Vapour and air", "D. Liquid and vapour"],
        answer: "D",
        explanation: "Liquid and vapour charging."
    },
    {
        question: "All the following are methods of achieving refrigeration except ………………",
        image: "",
        options: ["A. Vapour absorption", "B. Vapour compression", "C. Vapour adsorption", "D. Vapour jet"],
        answer: "C",
        explanation: "Vapour adsorption is not a primary method."
    },
    {
        question: "The name of the lubricant used for the lubrication of refrigeration compressor is called …………………..",
        image: "",
        options: ["A. Soluble oil", "B. Capella D oil", "C. Mineral oil", "D. Fixed oil"],
        answer: "B",
        explanation: "Capella D oil."
    },
    {
        question: "The following are examples of synthetic refrigerant except …………………..",
        image: "",
        options: ["A. HC’s", "B. CFC’s", "C. HFC’s", "D. HCFC’s"],
        answer: "A",
        explanation: "HC’s (Hydrocarbons) are natural."
    },
    {
        question: "Condensation of vapour into liquid in condenser unit takes place by……………",
        image: "",
        options: ["A. Natural convection to the heat sink", "B. Liquid expansion to the heat sink", "C. Heat rejection to the heat sink", "D. Heat absorption to the heat sink"],
        answer: "C",
        explanation: "Heat rejection to the heat sink."
    },
    {
        question: "Fully saturated, Azeotropic and Zeotropic refrigerants include………………..",
        image: "",
        options: ["A. R12, R503 and R407", "B. R11, R503 and R407", "C. R717, R503 and R407", "D. R178, R603 and R 503."],
        answer: "A",
        explanation: "R12, R503 and R407."
    },
    {
        question: "An evaporator is used in …………………. Pressure side of a refrigeration system",
        image: "",
        options: ["A. High", "B. Low", "C. Both High and Low", "D. Intermediate"],
        answer: "B",
        explanation: "Low pressure side."
    },
    {
        question: "The pressure at the outlet of a refrigerant compressor is called ………………….",
        image: "",
        options: ["A. Suction Pressure", "B. Discharge Pressure", "C. Critical Pressure", "D. Back Pressure"],
        answer: "B",
        explanation: "Discharge Pressure."
    },
    {
        question: "An expansion device is used to ……………………………………………..",
        image: "",
        options: ["A. Raise the pressure of the refrigerant", "B. Raise the temperature of the refrigerant", "C. Circulate the refrigerant through the refrigerating system", "D. None of the above"],
        answer: "D",
        explanation: "It is used to reduce pressure (throttling)."
    },
    {
        question: "The classification of compressor based on trapping a certain volume of gas in a cylinder that is continuously reduced by the compressing device is called………………",
        image: "",
        options: ["A. Positive displacement", "B. Roto-dynamic", "C. Hermetic sealed", "D. Working principles"],
        answer: "A",
        explanation: "Positive displacement."
    },
    {
        question: "The following are type of flames except ……………………………",
        image: "",
        options: ["A. Carbonated flame", "B. Oxidizing flame", "C. Carburizing flame", "D. Neutral flame"],
        answer: "A",
        explanation: "Carbonated flame is not a standard type."
    },
    {
        question: "What is the usual composition of soft solder?",
        image: "",
        options: ["A. Lead and antimony", "B. Lead and Tin", "C. Tin and Zinc", "D. Zinc and copper"],
        answer: "B",
        explanation: "Lead and Tin."
    },
    {
        question: "What is the base of most of silver brazing flux?",
        image: "",
        options: ["A. Vaseline", "B. Zinc chloride", "C. Borax", "D. Sodium chloride"],
        answer: "C",
        explanation: "Borax."
    },
    {
        question: "What is the advantage of silver brazing over soft soldering?",
        image: "",
        options: ["A. Cheaper", "B. Quicker", "C. Neater", "D. Stronger"],
        answer: "D",
        explanation: "Stronger joint."
    },
    {
        question: "What is the approximate temperature at which silver brazing alloys flow?",
        image: "",
        options: ["A. 618 oC", "B. 593 oC", "C. 565 oC", "D. 537 oC"],
        answer: "B",
        explanation: "Approximately 593 °C."
    },
    {
        question: "Why must the flux be removed after soldering and brazing?",
        image: "",
        options: ["A. It is not", "B. To help one see the quality of the job", "C. To prevent corrosion", "D. To polish the joint"],
        answer: "C",
        explanation: "To prevent corrosion."
    },
    {
        question: "How many joints are soldered when three pieces of tubing are joined with a coupling and a swagged joint?",
        image: "",
        options: ["A. 2", "B. 3", "C. 4", "D. 5"],
        answer: "B",
        explanation: "Three joints."
    },
    {
        question: "How do pipe thread seal together?",
        image: "",
        options: ["A. Cut on a taper", "B. Gasket", "C. “O” rings", "D. Each thread is tapered"],
        answer: "A",
        explanation: "Cut on a taper."
    },
    {
        question: "How many wrenches should be used to install a coupling on a pipe?",
        image: "",
        options: ["A. One", "B. Three", "C. Two", "D. One plier and one pipe wrench."],
        answer: "C",
        explanation: "Two wrenches (one on each side)."
    },
    {
        question: "The melting point of ice is ……………",
        image: "",
        options: ["A. 273K", "B. 0oF", "C. 0o Rankin", "D. 10oC"],
        answer: "A",
        explanation: "273 K (0°C)."
    },
    {
        question: "Why is the tubing cut with a cutter instead of being cut with a hacksaw?",
        image: "",
        options: ["A. It is easier", "B. To keep copper chips out of the refrigerant lines", "C. It is faster", "D. To keep air out of the tubing"],
        answer: "B",
        explanation: "To prevent copper chips from entering the lines."
    },
    {
        question: "What is the most frequent service operation performed on a condenser?",
        image: "",
        options: ["A. Replacing it", "B. Purging it", "C. Straightening the fins", "D. Cleaning it"],
        answer: "D",
        explanation: "Cleaning it."
    },
    {
        question: "What colour of the halide torch flame indicates a leak?",
        image: "",
        options: ["A. Red", "B. Blue", "C. Yellow", "D. Green"],
        answer: "D",
        explanation: "Green colour indicates leak."
    },
    {
        question: "What instrument should be used to check for a short circuit in a system?",
        image: "",
        options: ["A. Voltmeter", "B. Ohmmeter", "C. Ammeter", "D. Wattmeter"],
        answer: "B",
        explanation: "Ohmmeter."
    },
    {
        question: "How many terminals are used in most hermetic compressor?",
        image: "",
        options: ["A. Three", "B. Four", "C. Two", "D. Five"],
        answer: "A",
        explanation: "Three terminals."
    },
    {
        question: "What is the recommended temperature range for a chest type food freezer?",
        image: "",
        options: ["A. 0 oC - -15 oC", "B. -28 oC - -23 oC", "C. -34 oC - -31.6 oC", "D. -40 oC – 34.4oC"],
        answer: "B",
        explanation: "-28°C to -23°C."
    },
    {
        question: "A heat pump is an example of …………………….",
        image: "",
        options: ["A. Compressor", "B. Refrigerator", "C. Condenser", "D. Water chiller"],
        answer: "B",
        explanation: "Refrigerator (reversible cycle)."
    },
    {
        question: "What type of refrigerant control is in common use on small domestic freezers?",
        image: "",
        options: ["A. Low side float valve", "B. Thermostatic expansion valve", "C. Capillary tube", "D. Automatic expansion valve"],
        answer: "C",
        explanation: "Capillary tube."
    },
    {
        question: "Why is a filter put at the inlet of the capillary tube?",
        image: "",
        options: ["A. To remove oil", "B. To remove air", "C. To remove solid foreign particles", "D. To remove moisture"],
        answer: "C",
        explanation: "To remove solid foreign particles."
    },
    {
        question: "What type of material is capillary tube made of?",
        image: "",
        options: ["A. Copper", "B. Aluminum", "C. Stainless steel", "D. Brass"],
        answer: "A",
        explanation: "Copper."
    },
    {
        question: "Where is the most common place to install a drier in the system?",
        image: "",
        options: ["A. Between the refrigerant control and the evaporator", "B. In the liquid line", "C. Between the compressor and condenser", "D. Between the condenser and liquid receiver"],
        answer: "B",
        explanation: "In the liquid line."
    },
    {
        question: "The chemical formula of Ammonia refrigerant is ………………………..",
        image: "",
        options: ["A. R 717", "B. R 708", "C. R 707", "D. R 807"],
        answer: "A",
        explanation: "Ammonia is designated as R-717."
    },
    {
        question: "Overload protector in a refrigeration system is located in the",
        image: "",
        options: ["A. control panel", "B. liquid receiver", "C. evaporator outlet", "D. compressor terminal"],
        answer: "D",
        explanation: "It is located at the compressor terminal."
    },
    {
        question: "Joining of refrigeration copper pipe is done by…………………………….",
        image: "",
        options: ["A. brazing", "B. welding", "C. screwing", "D. riveting"],
        answer: "A",
        explanation: "Brazing is the preferred method."
    },
    {
        question: "The merit of installing the suction pipe downwards is to………………",
        image: "",
        options: ["A. reduce operation cost", "B. increase pumping efficiency", "C. Ensure effective discharge pressure", "D. enhance oil return"],
        answer: "D",
        explanation: "To enhance oil return to the compressor."
    },
    {
        question: "Which of the following control is popular with domestic refrigeration unit",
        image: "",
        options: ["A. automatic expansion valve", "B. thermostatic expansion valve", "C. capillary tube", "D. high side float"],
        answer: "C",
        explanation: "Capillary tube is commonly used in domestic units."
    },
    {
        question: "Which of the following is not used for servicing a window air conditioner……",
        image: "",
        options: ["A. screw driver", "B. pliers", "C. pipe wrench", "D. Allen key"],
        answer: "C",
        explanation: "Pipe wrench is not typically required."
    },
    {
        question: "The component that changes refrigerant from liquid to vapour is………..",
        image: "",
        options: ["A. control", "B. evaporator", "C. Condenser", "D. Drier"],
        answer: "B",
        explanation: "Evaporator."
    },
    
    ],  
    get: [],
    engineer: [],
    computer: []
};

let examData, currentQ = 0, userAnswers = [], timer, timeLeft = 720;

window.addEventListener("DOMContentLoaded", () => {
    try {
        examData = JSON.parse(localStorage.getItem("currentExam") || "null");
        if (!examData) throw new Error("No exam selected — go back and pick a course.");

        const active = JSON.parse(localStorage.getItem("cbtActive") || "null");
        if (!active) throw new Error("No active session — please login again.");

        const allUsers = JSON.parse(localStorage.getItem("cbtAllUsers") || "[]");
        window.currentUser = allUsers.find(u => u.matric === active.matric);
        if (!currentUser) throw new Error("User not found — re‑register/login.");

        let qBank = [...(fullQuestionBank[examData.subId] || [])];
        if (qBank.length === 0) throw new Error(`No questions for ${examData.subName}`);

        while (qBank.length < 30) qBank = [...qBank, ...qBank];
        examData.questions = [...qBank].sort(() => Math.random() - 0.5).slice(0, 30);
        userAnswers = Array(30).fill(null);

        const picEl = document.getElementById("examPic");
        picEl.onerror = () => { picEl.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; };
        picEl.src = currentUser.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png";
        document.getElementById("examFirstname").textContent = currentUser.firstname || "Student";
        document.getElementById("examMatric").textContent = currentUser.matric || "";

        renderNav();
        showQuestion();
        startTimer();

    } catch (err) {
        alert("❌ " + err.message);
        console.error(err);
        window.location.href = "index.html";
    }
});

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, "0");
        const s = (timeLeft % 60).toString().padStart(2, "0");
        document.getElementById("timer").textContent = `${m}:${s}`;
        if (timeLeft <= 0) submitExam();
    }, 1000);
}

function showQuestion() {
    const q = examData.questions[currentQ];
    const sel = userAnswers[currentQ];
    
    // Show image if available
    const imageHtml = q.image ? `<img src="${q.image}" alt="Question image" class="question-img">` : "";

    document.getElementById("questionBox").innerHTML = `
        <h3>Q${currentQ + 1}: ${q.question}</h3>
        ${imageHtml}
        <div class="options-list">
            ${q.options.map(opt => `
                <label class="option ${sel === opt[0] ? "selected" : ""}">
                    <input type="radio" name="ans" value="${opt[0]}" 
                           ${sel === opt[0] ? "checked" : ""} 
                           onchange="saveAns('${opt[0]}')">
                    ${opt}
                </label>
            `).join("")}
        </div>
    `;
    document.getElementById("prevBtn").disabled = currentQ === 0;
    document.getElementById("nextBtn").textContent = currentQ === 29 ? "✅ Finish" : "Next ➡️";
    updateNavStyle();
}

function saveAns(val) {
    userAnswers[currentQ] = val;
    updateNavStyle();
}
function prevQ() { if (currentQ > 0) { currentQ--; showQuestion(); } }
function nextQ() { if (currentQ < 29) { currentQ++; showQuestion(); } }

function renderNav() {
    const nav = document.getElementById("qNav");
    nav.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        const btn = document.createElement("button");
        btn.className = "q-btn";
        btn.textContent = i + 1;
        btn.onclick = () => { currentQ = i; showQuestion(); };
        nav.appendChild(btn);
    }
}
function updateNavStyle() {
    document.querySelectorAll(".q-btn").forEach((b, i) => {
        b.classList.remove("answered", "unanswered");
        b.classList.add(userAnswers[i] ? "answered" : "unanswered");
    });
}

function submitExam() {
    clearInterval(timer);
    const score = userAnswers.filter((a, i) => a === examData.questions[i].answer).length;

    currentUser.exams.push({
        subject: examData.subName,
        subId: examData.subId,
        score,
        userAnswers,
        questions: examData.questions,
        timeLeft: Math.round(timeLeft / 60),
        date: new Date().toLocaleString()
    });
    const all = JSON.parse(localStorage.getItem("cbtAllUsers"));
    const idx = all.findIndex(u => u.matric === currentUser.matric);
    if (idx !== -1) {
        all[idx] = currentUser;
        localStorage.setItem("cbtAllUsers", JSON.stringify(all));
    }

    alert(`✅ Exam Finished!\nScore: ${score}/30 — ${Math.round(score / 30 * 100)}%`);
    window.location.href = "index.html";
}
