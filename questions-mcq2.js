// ==================== QUIZ DATA - MCQ PART 2 (Questions 21-40) ====================
const quizDataMCQ2 = [
    {
        question: "The first Step to Document an E-Commerce Marketing Plan is:",
        type: "multiple-choice",
        answers: ["Define Goals and Objectives", "Analyze competitors", "Create content", "Launch campaign"],
        correctAnswer: 0, // a
        explanation: "أول خطوة في أي خطة تسويق هي تحديد الأهداف (عايزين نوصل لإيه؟).",
        example: "قبل ما تبدأ أي حاجة، لازم تعرف هدفك: هل عايز تزود المبيعات؟ ولا عايز تبني براند؟ 🎯"
    },
    {
        question: "Different areas where you can implement content marketing are:",
        type: "multiple-choice",
        answers: ["Product descriptions", "Blog posts", "Visual content", "All of the above"],
        correctAnswer: 3, // d
        explanation: "التسويق بالمحتوى ممكن يكون في وصف المنتج، في البلوج (المقالات)، أو في الميديا (صور وفيديو).",
        example: "تقدر تكتب مقالات، تعمل فيديوهات، وتكتب وصف جذاب للمنتجات، كل ده تسويق بالمحتوى 📝"
    },
    {
        question: "...is ideal for e-commerce because it is a visual medium:",
        type: "multiple-choice",
        answers: ["Email marketing", "Social media", "SEO", "Affiliate marketing"],
        correctAnswer: 1, // b
        explanation: "السوشيال ميديا (زي إنستجرام وتيك توك) بتعتمد على العين (صور وفيديوهات) فبتقنع الناس أسرع.",
        example: "صورة حلوة للمنتج على إنستجرام ممكن تبيع أكتر من 1000 كلمة 📸"
    },
    {
        question: "Which tool sends reminder emails to shoppers who left the website:",
        type: "multiple-choice",
        answers: ["Cart Abandonment", "CRM", "Analytics", "SEO"],
        correctAnswer: 0, // a
        explanation: "زي ما قلنا في الصح والغلط، دي أداة 'ترك سلة التسوق' (Cart Abandonment).",
        example: "لما تحط حاجات في السلة وتطلع، الموقع يبعتلك إيميل يفكرك 📧"
    },
    {
        question: "...is the number of visitors converted per hundred visitors through E-commerce store:",
        type: "multiple-choice",
        answers: ["Traffic", "Bounce rate", "Conversion rate", "Click rate"],
        correctAnswer: 2, // d (but it's index 2 for conversion rate)
        explanation: "معدل التحويل (Conversion Rate): لو دخل 100 واحد واشترى منهم 2، يبقى المعدل 2%.",
        example: "لو عندك 1000 زائر و10 منهم اشتروا، معدل التحويل = 1% 📊"
    },
    {
        question: "To begin with your paid advertising efforts you must:",
        type: "multiple-choice",
        answers: ["Search ads", "Remarketing", "Lookalike audiences", "All of the above"],
        correctAnswer: 3, // d
        explanation: "لازم تعمل إعلانات بحث (جوجل)، وإعلانات للناس اللي دخلت وما اشترتش (Remarketing)، وتوسع جمهورك (Lookalike).",
        example: "استراتيجية إعلانات ناجحة بتجمع بين البحث والاستهداف المعاد والجمهور المشابه 💰"
    },
    {
        question: "E-commerce marketing enables the following except:",
        type: "multiple-choice",
        answers: ["Increase awareness", "Decreasing ad costs", "Drive traffic", "Convert visitors"],
        correctAnswer: 1, // b
        explanation: "مش شرط يقلل تكلفة الإعلان (الإعلانات ممكن تكون غالية)، بس هو بيزود الوعي والمبيعات.",
        example: "الإعلانات الممولة غالباً بتكلف فلوس، لكن بتجيب نتايج 📈"
    },
    {
        question: "Among the considerations that help your store rank higher on search engines:",
        type: "multiple-choice",
        answers: ["Mobile optimization", "Page speed", "Keywords", "All of the above"],
        correctAnswer: 3, // d
        explanation: "عشان تطلع في جوجل (SEO)، لازم موقعك يشتغل عالموبايل حلو، ويحمل بسرعة، وتختار كلمات مفتاحية صح.",
        example: "موقع سريع، متجاوب مع الموبايل، وفيه كلمات مفتاحية مناسبة = SEO قوي 🔍"
    },
    {
        question: "Among the areas of E-finance are:",
        type: "multiple-choice",
        answers: ["E-banking", "Financial Markets", "E-marketing", "Both A & B"],
        correctAnswer: 3, // d
        explanation: "الـ E-finance بيشمل البنوك الإلكترونية (E-banking) وأسواق المال (Financial Markets).",
        example: "تطبيق البنك الأهلي والبورصة الإلكترونية دول جزء من E-finance 🏦📊"
    },
    {
        question: "The important trends in the financial service industry:",
        type: "multiple-choice",
        answers: ["Price transparency", "Distribution channels", "Both A & B", "None"],
        correctAnswer: 2, // d (but actually "Both A & B" is index 2, so it's c in answer key)
        explanation: "الإنترنت خلى الأسعار شفافة (شايف كل حاجة)، وغير قنوات التوزيع (بقى كله أونلاين).",
        example: "دلوقتي تقدر تقارن أسعار القروض من 10 بنوك في دقايق، ده شفافية السعر 💡"
    },
    {
        question: "The following statements are true about E-finance except:",
        type: "multiple-choice",
        answers: ["E-finance is more costly than traditional", "Increases efficiency", "Reduces costs", "Improves accessibility"],
        correctAnswer: 0, // a
        explanation: "دي الجملة الغلط. الـ E-finance في الحقيقة 'أرخص' بكتير من فتح فروع بنوك وتعيين موظفين كتير.",
        example: "بناء تطبيق موبايل أرخص بكتير من فتح 100 فرع بنك 📲"
    },
    {
        question: "Which factors make E-finance important in developing countries:",
        type: "multiple-choice",
        answers: ["Global access", "Removes intermediaries", "Easy transactions", "All of the above"],
        correctAnswer: 3, // d
        explanation: "في الدول النامية، الـ E-finance بيوصلك للعالمية، بيلغي الوسطاء، وبيخلي التعامل أسهل.",
        example: "فلاح في قرية يقدر يفتح حساب ويحول فلوس من موبايله من غير ما يروح البنك 🌍"
    },
    {
        question: "The following advantages are related to E-Finance for financial institutions except:",
        type: "multiple-choice",
        answers: ["Reduces operational costs", "Help in employment generation", "Increases customer reach", "Improves efficiency"],
        correctAnswer: 1, // b
        explanation: "الـ E-Finance عادة بيقلل الحاجة للموظفين (لأنه أوتوماتيك)، فمش ميزته الأساسية 'خلق وظائف' للمؤسسة المالية.",
        example: "البنك الإلكتروني محتاج موظفين أقل من الفروع التقليدية 🤖"
    },
    {
        question: "... refers to the market where financial assets are exchanged by dealers:",
        type: "multiple-choice",
        answers: ["Financial markets", "E-banking", "E-commerce", "Payment systems"],
        correctAnswer: 0, // a
        explanation: "ده تعريف أسواق المال (Financial Markets) - زي البورصة.",
        example: "البورصة المصرية اللي بيتبادل فيها الأسهم ده Financial Market 📈"
    },
    {
        question: "... includes e-cash, e-payment, digital currency and ATM:",
        type: "multiple-choice",
        answers: ["E-marketing", "E-banking", "Internet transactions", "E-commerce"],
        correctAnswer: 2, // c - Internet transactions
        explanation: "كلمة 'Internet transactions' (معاملة عبر الإنترنت) هي المصطلح الشامل اللي بيغطي أي عملية نقل قيمة أو فلوس بتحصل ديجيتال. سواء كاش إلكتروني، عملة رقمية، أو حتى سحب ATM، كل ده معاملات إلكترونية.",
        example: "زي لما بتفتح 'فوري' وتدفع فاتورة (E-payment)، أو تحول عملة مشفرة (Digital Currency)، أو تشتري كارت ألعاب (E-cash)، كلهم Transactions عالنت 💳"
    },
    {
        question: "Among the advantages of E-Finance related to government:",
        type: "multiple-choice",
        answers: ["Increases competition", "Reduces regulation", "Reduces poverty", "Both A & C"],
        correctAnswer: 3, // d
        explanation: "للحكومة، الـ E-finance بيزود المنافسة وبيساعد في تقليل الفقر (عن طريق الشمول المالي).",
        example: "لما كل الناس يقدروا يفتحوا حسابات بنكية بسهولة، ده بيقلل الفقر ويزود المنافسة 🏛️"
    },
    {
        question: "... provides services that resolve payment and delivery issues in international trade:",
        type: "multiple-choice",
        answers: ["E-banking", "Online trade finance", "E-commerce", "Payment gateway"],
        correctAnswer: 1, // b
        explanation: "تمويل التجارة أونلاين (Online Trade Finance) هو اللي بيحل مشاكل الدفع والتسليم في التجارة الدولية.",
        example: "لما تستورد بضاعة من الصين، تمويل التجارة الأونلاين بيضمنلك إنك تدفع بأمان 🌍"
    },
    {
        question: "Various components of E-finance are the following except:",
        type: "multiple-choice",
        answers: ["E-marketing", "E-banking", "Financial markets", "E-payment"],
        correctAnswer: 0, // a
        explanation: "التسويق الإلكتروني (E-marketing) ده مجال لوحده، مش جزء من التمويل (E-finance).",
        example: "E-finance بيشمل البنوك والبورصة والدفع، بس مش الإعلانات 📢"
    },
    {
        question: "It's important to identify how payment preferences can vary across different markets. That's related to:",
        type: "multiple-choice",
        answers: ["Security", "Geographical location of customers", "Technology", "Regulations"],
        correctAnswer: 1, // b - Geographical location
        explanation: "السؤال بيقول إن طرق الدفع المفضلة بتختلف باختلاف 'الأسواق' (Markets). والأسواق دي بتتصنف أساساً حسب 'المكان الجغرافي'. يعني مكان العميل (البلد) هو اللي بيحدد هو متعود يدفع إزاي.",
        example: "في مصر لازم توفر 'دفع عند الاستلام' وفودافون كاش، في أمريكا لازم PayPal وCredit Card - الجغرافيا هي اللي بتحكم 🌍"
    },
    {
        question: "E-Commerce application will be built on existing technology infrastructure such as:",
        type: "multiple-choice",
        answers: ["Hardware", "Networks", "Software", "All of the above"],
        correctAnswer: 3, // d
        explanation: "عشان تبني تطبيق تجارة إلكترونية، محتاج كمبيوترات (Hardware)، شبكات اتصال (Networks)، وسوفت وير (Software).",
        example: "المتجر الإلكتروني محتاج سيرفرات، إنترنت سريع، وبرمجة 💻"
    }
];
