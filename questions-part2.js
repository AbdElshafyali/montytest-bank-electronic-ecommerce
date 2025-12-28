// ==================== QUIZ DATA - PART 2 (True/False 21-40) ====================
const quizDataPart2 = [
    {
        question: "Complex websites can be considered an important advantages of E marketing.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "بالعكس، الموقع المعقد بيطفش الزبون. الميزة هي المواقع السهلة والبسيطة (User-friendly).",
        example: "الموقع اللي فيه 100 زرار ومتاهة بيخلي الزبون يهرب، الموقع البسيط بيخليه يشتري 🎯"
    },
    {
        question: "Electronic Payment is a financial exchange that takes place online between buyers and sellers.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "الدفع الإلكتروني يعني فلوس بتتحول من المشتري للبائع عن طريق النت.",
        example: "لما تدفع بالفيزا على موقع، الفلوس بتتحول من حسابك لحساب البائع إلكترونياً 💳"
    },
    {
        question: "Electronic payments allow customers to pay for goods and services electronically with the use of checks or cash.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "الجملة متناقضة، 'إلكترونياً' يعني من غير كاش ولا شيكات ورقية. الدفع الإلكتروني بيتم ببطاقات أو محافظ إلكترونية.",
        example: "مافيش حد بيدفع أونلاين بشيك ورقي! لازم فيزا أو فودافون كاش 🚫💵"
    },
    {
        question: "Intuitive interfaces are the only factor in designing electronic payment systems.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "الواجهة السهلة مهمة، بس مش 'الوحيدة'. أهم حاجة الأمان (Security) والسرعة وتكامل البيانات.",
        example: "لو الموقع سهل بس مش آمن، هيتسرق منه، فالأمان أهم من السهولة حتى 🔐"
    },
    {
        question: "Credit or Debit Card Payments are the most used method in electronic payment.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "الفيزا والماستركارد هم أكتر طريقة شعبية للدفع أونلاين لحد دلوقتي.",
        example: "معظم الناس بتدفع على أمازون ونون بالفيزا 💳"
    },
    {
        question: "Many businesses and consumers are still wary of conducting extensive business electronically.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "لسه في ناس وشركات بتخاف تعمل صفقات كبيرة أونلاين عشان خايفين من النصب أو سرقة البيانات.",
        example: "ناس كتير بتخاف تشتري عربية أو شقة أونلاين وبتفضل تروح بنفسها 🏠"
    },
    {
        question: "E commerce marketing is used to Create awareness about your e-commerce store.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "هدف التسويق الإلكتروني إن الناس تعرف إن عندك متجر أصلاً عشان يدخلوا يشتروا.",
        example: "لو مافيش حد عارف متجرك، مش هتبيع حاجة، فلازم تعمل إعلانات 📣"
    },
    {
        question: "Determining mission and vision is the first step to Document an E-Commerce Marketing Plan.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "قبل ما تعمل خطة تسويق، لازم تكون محدد 'إحنا مين' (Mission) و 'عايزين نوصل لفين' (Vision).",
        example: "لو مش عارف هدفك إيه، مش هتعرف تسوق إزاي 🎯"
    },
    {
        question: "E-commerce is one of the industries that benefit tremendously from social media.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "السوشيال ميديا هي المكان اللي بتصطاد منه زباين للمتجر بتاعك، فبتستفيد جداً منها.",
        example: "الإعلانات على فيسبوك وإنستجرام بتجيب مبيعات كتير للمتاجر 📱"
    },
    {
        question: "To build a martech stack for your store requires identifying the marketing channels to automate and manage marketing activities on different channels.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "الـ Martech stack يعني مجموعة البرامج اللي بتستخدمها في التسويق. عشان تبنيها صح لازم تعرف أنت هتسوق فين (فيسبوك، إيميل، جوجل) عشان تجيب أدوات تدير الكلام ده أوتوماتيك.",
        example: "لو بتسوق على إنستجرام وإيميل، تجيب برنامج ينظملك البوستات والرسايل أوتوماتيك 🤖"
    },
    {
        question: "E-commerce is one of the industries that benefit rarely from social media.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "عكس رقم 29، التجارة الإلكترونية بتعتمد بشكل 'كبير جداً' مش 'نادر' على السوشيال ميديا.",
        example: "معظم المتاجر الأونلاين بتعتمد على فيسبوك وإنستجرام في البيع 📈"
    },
    {
        question: "Influencer Marketing is very effective tool that affect consumer purchasing behaviour.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "لما بلوجر مشهور يقول 'المنتج ده تحفة'، الناس بتثق فيه وبتشتري، فده بيأثر فعلاً.",
        example: "لما يوتيوبر يعمل ريفيو لموبايل، المبيعات بتزيد بشكل جامد 🌟"
    },
    {
        question: "Chaptbots aren't effect mechanism for customer services and support.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "الشات بوت (الرد الآلي) مفيد جداً لأنه بيرد على الناس 24 ساعة وبيحل مشاكل بسيطة بسرعة.",
        example: "الشات بوت في المواقع بيرد على أسئلة زي 'فين طلبي؟' في ثواني 🤖💬"
    },
    {
        question: "Recommendation engines personalize the shopping experience by suggesting products to visitors based on their purchase and website browsing history.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "ده السيستم اللي بيقولك 'الناس اللي اشتروا الموبايل ده اشتروا معاه الجراب ده'. بيعرف ذوقك من لفك في الموقع.",
        example: "أمازون بيقولك 'Customers who bought this also bought...' ده محرك توصيات 🎁"
    },
    {
        question: "Cart abandonment software sends reminder emails to shoppers who left the website without completing the purchase.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "لما تحط حاجات في السلة وتطلع من غير ما تدفع، السيستم ده يبعتلك إيميل يقولك 'إلحق، نسيت حاجات في السلة كمل طلبك'.",
        example: "جوميا بتبعتلك إيميل تقولك 'رجعلنا كمل طلبك' لما تسيب السلة 📧"
    },
    {
        question: "The most used method in e- marketing commerce is paid advertisements.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "الإعلانات الممولة (Paid Ads) هي أسرع وأكتر طريقة منتشرة عشان تجيب مبيعات.",
        example: "الإعلانات على جوجل وفيسبوك بتجيب نتايج فورية ومبيعات سريعة 💰"
    },
    {
        question: "E-finance can improve efficiency and decrease the costs of internal business functions.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "التمويل الإلكتروني بيخلي الحسابات والتحويلات أسرع وأرخص، فبيوفر مصاريف ومجهود جوه الشركة.",
        example: "بدل ما تروح الفرع تحول فلوس، تحولها من الموبايل في ثانية 📲"
    },
    {
        question: "E-finance is defined as the provision of financial services and markets using electronic communication and computation.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "ده تعريف الـ E-finance: تقديم خدمات مالية (بنوك، بورصة) باستخدام التكنولوجيا والكمبيوتر.",
        example: "البنك الأهلي الأونلاين والبورصة الإلكترونية دي أمثلة على E-finance 🏦"
    },
    {
        question: "Financial Markets is considered one area of E- Finance.",
        type: "true-false",
        answers: ["صح", "غلط"],
        correctAnswer: 0,
        explanation: "أسواق المال (البورصة وتداول الأسهم أونلاين) جزء أساسي من التمويل الإلكتروني.",
        example: "تداول الأسهم على تطبيق الموبايل ده جزء من E-finance 📊"
    },
    {
        question: "E-banking refers to the process of getting connected to the official website of the bank through the internet and performing the task even if the customer is not present in the bank.",
        type: "true-false",
        answers: ["صح", "غلط"],
        correctAnswer: 0,
        explanation: "الـ E-banking يعني تعمل كل خدماتك البنكية من موبايلك أو اللابتوب وأنت في البيت من غير ما تروح الفرع.",
        example: "تقدر تحول فلوس وتدفع فواتير من تطبيق البنك وأنت قاعد في البيت 🏠💳"
    }
];
