// ==================== QUIZ DATA - MCQ PART 1 (Questions 1-20) ====================
const quizDataMCQ1 = [
    {
        question: "E-commerce has a wide scope... Among its scope are:",
        type: "multiple-choice",
        answers: ["E-finance", "E-banking", "E-marketing", "None of the above"],
        correctAnswer: 3, // d
        explanation: "نطاق التجارة الإلكترونية واسع ويشمل مجالات كتير، لكن الاختيارات دي (E-finance وE-banking وE-marketing) هي تطبيقات أو مجالات مرتبطة بالتجارة الإلكترونية، لكن مش 'النطاق' نفسه.",
        example: "النطاق الحقيقي بيشمل البيع والشراء والمعاملات التجارية، بس الـ E-marketing والـ E-finance دي أدوات داخل المنظومة 🛒"
    },
    {
        question: "... is used in the large market chains for transactions with their suppliers",
        type: "multiple-choice",
        answers: ["EDI", "Electronic data interchange", "ERP", "All of the above"],
        correctAnswer: 1, // b
        explanation: "الـ EDI (Electronic Data Interchange) ده نظام قديم ومهم بيستخدموه الكبار (زي كارفور وموردينه) عشان الفواتير والطلبات تمشي أوتوماتيك بينهم.",
        example: "سلاسل السوبر ماركت الكبيرة بتستخدم EDI عشان تطلب بضاعة من الموردين بشكل إلكتروني 📦"
    },
    {
        question: "Among the advantages of electronic commerce are the following except:",
        type: "multiple-choice",
        answers: ["Lower costs", "24/7 availability", "There's a lot of competition", "Global reach"],
        correctAnswer: 2, // c
        explanation: "إن 'المنافسة عالية جداً' دي مش ميزة (Advantage)، دي عيب أو تحدي بيواجهك لأن أي حد ممكن يفتح متجر.",
        example: "المنافسة الشديدة معناها إن لازم تبذل مجهود أكبر عشان تتميز، فدي مش ميزة ⚠️"
    },
    {
        question: "... involves the use of online networks, computer communication... to achieve marketing objectives:",
        type: "multiple-choice",
        answers: ["E-marketing", "E-commerce", "E-business", "E-finance"],
        correctAnswer: 0, // a
        explanation: "استخدام الشبكات الإلكترونية وأجهزة الكمبيوتر عشان نحقق أهداف تسويقية يبقى أكيد 'تسويق إلكتروني'.",
        example: "لما تعمل إعلان على فيسبوك عشان تبيع منتجك، ده E-marketing 📱📢"
    },
    {
        question: "E-Marketing... Among its advantages are:",
        type: "multiple-choice",
        answers: ["Complex websites", "High costs", "Limited reach", "Customers can find products even if office is closed"],
        correctAnswer: 3, // d
        explanation: "الميزة الكبيرة في التسويق الإلكتروني إنك متاح 24 ساعة، الزبون يشوف بضاعتك وأنت نايم.",
        example: "الزبون يقدر يتصفح موقعك الساعة 3 الصبح ويشتري، المحل العادي يكون مقفول ⏰"
    },
    {
        question: "A useful framework for developing effective E-Marketing objectives is the five S's framework, which includes:",
        type: "multiple-choice",
        answers: ["Sell, serve, speak, save, sizzle", "Shop, search, secure, supply, sell", "Speed, safety, service, sales, support", "None of the above"],
        correctAnswer: 0, // a
        explanation: "دي قاعدة مشهورة (الـ 5Ss): Sell (تبيع)، Serve (تخدم العميل)، Speak (تتكلم معاه)، Save (توفر فلوس)، Sizzle (تعمل إبهار).",
        example: "الموقع لازم يبيع، ويخدم العميل كويس، ويتواصل معاه، ويوفرله فلوس، ويبهره بالتصميم 🎯"
    },
    {
        question: "When setting E-Marketing objectives, make sure that they are:",
        type: "multiple-choice",
        answers: ["Specific", "Measurable", "Time-bound", "All of the above"],
        correctAnswer: 3, // d
        explanation: "الأهداف لازم تكون SMART: محددة (Specific)، قابلة للقياس (Measurable)، ومربوطة بوقت (Time-bound).",
        example: "مش تقول 'عايز أبيع كتير'، قول 'عايز أبيع 1000 قطعة في 3 شهور' ✅"
    },
    {
        question: "...the following represents the importance of e-marketing except:",
        type: "multiple-choice",
        answers: ["Global reach", "Many users don't trust electronic methods", "Lower costs", "24/7 availability"],
        correctAnswer: 1, // b
        explanation: "دي مش 'أهمية'، دي 'مشكلة' أو عيب إن الناس لسه خايفة تدفع أونلاين.",
        example: "إن المستخدمين مش بيثقوا في الدفع الإلكتروني ده تحدي مش ميزة ⚠️"
    },
    {
        question: "insta-pay can be considered as one type of E-commerce which is called:",
        type: "multiple-choice",
        answers: ["B2B", "B2C", "C2C", "B2G"],
        correctAnswer: 2, // c
        explanation: "إنستا باي معمول أساساً عشان أنا أحولك وأنت تحولي (أفراد لبعض)، فده C2C (Consumer to Consumer).",
        example: "لما تحول لصاحبك 100 جنيه بإنستا باي، دي معاملة C2C 💸"
    },
    {
        question: "The difference between E-commerce and E-business is very clear in the following except:",
        type: "multiple-choice",
        answers: ["E-commerce is commercial", "E-business is broader", "E-business must use internet", "E-commerce focuses on transactions"],
        correctAnswer: 2, // c
        explanation: "الجملة الغلط هي إن E-business 'لازم' يستخدم إنترنت. E-business ممكن يستخدم Intranet (شبكة داخلية) مش بس إنترنت عادي.",
        example: "شركة ممكن تدير نظام الموارد البشرية بتاعها على شبكة داخلية من غير إنترنت، وده E-business 🏢"
    },
    {
        question: "... allows customers to pay for goods and services electronically without the use of checks or cash.",
        type: "multiple-choice",
        answers: ["E-commerce", "E-payment", "E-banking", "E-wallet"],
        correctAnswer: 1, // b
        explanation: "ده تعريف الدفع الإلكتروني (E-payment) بالضبط: الدفع من غير كاش أو شيكات.",
        example: "لما تدفع بالفيزا أونلاين، ده E-payment 💳"
    },
    {
        question: "Among the common Methods of E-payment are:",
        type: "multiple-choice",
        answers: ["Credit cards", "Debit cards", "E-wallets", "All of the above"],
        correctAnswer: 3, // d
        explanation: "البطاقات الائتمانية، بطاقات الخصم، والمحافظ الإلكترونية كلهم طرق دفع إلكتروني شائعة.",
        example: "تقدر تدفع بالفيزا أو الماستركارد أو فودافون كاش، كلهم E-payment ✅"
    },
    {
        question: "A card that has a prepaid monetary value and called a gift card is:",
        type: "multiple-choice",
        answers: ["Smart card / Stored value card", "Credit card", "Debit card", "Charge card"],
        correctAnswer: 0, // a
        explanation: "كارت الهدايا المشحون بفلوس مسبقاً بيسموه Stored Value Card أو Smart Card.",
        example: "كارت هدية أمازون اللي عليه 50 دولار ده Stored Value Card 🎁"
    },
    {
        question: "Electronic payment transactions are divided into various types such as:",
        type: "multiple-choice",
        answers: ["One-time payment", "Recurring payment", "Both A & B", "None of the above"],
        correctAnswer: 2, // c
        explanation: "في دفع مرة واحدة (زي ما تشتري جزمة) وفي دفع متكرر (زي اشتراك نتفليكس).",
        example: "شراء موبايل: دفع مرة واحدة، اشتراك سبوتيفاي: دفع متكرر كل شهر 🔁"
    },
    {
        question: "To decide which E-commerce payment method to offer depends on factors such as:",
        type: "multiple-choice",
        answers: ["Security", "Cost", "Ease of use", "Customer preferences and market standards"],
        correctAnswer: 3, // d
        explanation: "الأهم إنك تشوف الزبون بيفضل إيه وإيه المعايير السائدة في السوق (يعني في مصر مثلاً لازم توفر 'الدفع عند الاستلام').",
        example: "في مصر الناس بتحب الدفع عند الاستلام، في أوروبا بيفضلوا الكريديت كارد 🌍"
    },
    {
        question: "...there are some risks related to the following:",
        type: "multiple-choice",
        answers: ["Customer risks", "Merchant risks", "Technical risks", "All of the above"],
        correctAnswer: 3, // d
        explanation: "المخاطر بتواجه الزبون (تتسرق فلوسه)، والتاجر (يتنصب عليه)، والأمان التقني نفسه (اختراقات).",
        example: "الزبون ممكن تتسرق بياناته، والتاجر ممكن يتنصب عليه بكروت مزورة، والموقع ممكن يتهكر 🔒"
    },
    {
        question: "The following are considered factors in designing E-payment except:",
        type: "multiple-choice",
        answers: ["Database integration", "Intuitive interfaces", "Demographics", "Pricing"],
        correctAnswer: 2, // c - Demographics
        explanation: "الـ Database integration والواجهة (Interfaces) والتسعير (Pricing) دي عوامل تصميم تقنية واستراتيجية للنظام. لكن الـ Demographics (التركيبة السكانية) مش من عوامل التصميم التقني، ده أكتر حاجة بتستخدم في التسويق.",
        example: "تصميم نظام الدفع يهتم بالأمان وسهولة الاستخدام، مش بسن المستخدم أو جنسه 💡"
    },
    {
        question: "...risks such as stolen passwords, disputes over transactions refer to:",
        type: "multiple-choice",
        answers: ["Merchant risks", "Customer risks", "Technical risks", "All of the above"],
        correctAnswer: 1, // b
        explanation: "سرقة الباسوورد والنزاعات على المعاملات دي مشاكل بتواجه العميل (المستخدم) أكتر حاجة.",
        example: "لو الهاكر سرق باسوورد حسابك البنكي، ده خطر على العميل 🔐"
    },
    {
        question: "Among the merchant's risks that are related to electronic payment systems are:",
        type: "multiple-choice",
        answers: ["Stolen passwords", "Fraudulent payment instruments", "Payment disputes", "Both B & C"],
        correctAnswer: 3, // d
        explanation: "التاجر بيخاف من 'أدوات دفع مزورة' (كروت مسروقة) ومن 'النزاعات على الدفع' (حد يشتري ويرجع يقول ماشتريتش - Chargeback).",
        example: "حد يشتري بكارت مسروق أو يطلب استرجاع الفلوس بعد ما استلم المنتج، دي مخاطر التاجر 💳⚠️"
    },
    {
        question: "...is a form of prepaid account where the customer's account information is stored electronically:",
        type: "multiple-choice",
        answers: ["E-banking", "E-wallet", "E-commerce", "Smart card"],
        correctAnswer: 1, // b
        explanation: "المحفظة الإلكترونية (E-Wallet) زي فودافون كاش أو Apple Pay بتخزن بياناتك وتدفع منها بسرعة.",
        example: "فودافون كاش وإنستا باي دي محافظ إلكترونية (E-wallets) 📱💰"
    }
];
