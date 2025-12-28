// ==================== QUIZ DATA - PART 1 (True/False 1-20) ====================
const quizDataPart1 = [
    {
        question: "E business includes electronic trading of goods, services and electronic material between companies, between companies and their customers, or between companies and public administrations.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "الجملة دي بتوصف 'التجارة الإلكترونية' (E-commerce) أكتر ما بتوصف 'البيزنس الإلكتروني' (E-business). الـ E-business أشمل وأعم، بيضم العمليات الداخلية للشركة وعلاقتها بالموظفين مش بس البيع والشراء.",
        example: "لما تعمل سيستم للمرتبات جوه شركتك ده E-business، بس لما تبيع منتج أونلاين ده E-commerce 💼"
    },
    {
        question: "E-Commerce involves the use of internet, intranet or extranet.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "التجارة الإلكترونية لازم تتم عن طريق شبكات، سواء الإنترنت العادي، أو شبكة داخلية للشركة (Intranet)، أو شبكة بتربطك بموردينك (Extranet).",
        example: "أمازون بيستخدم الإنترنت عشان تشتري منه، والبنك بيستخدم شبكة خاصة عشان يحول فلوس 🌐"
    },
    {
        question: "Sells computers to the Government to be used in schools is considered a type of B2B.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "لما تبيع للحكومة ده اسمه (B2G) يعني Business to Government، مش B2B (شركة لشركة).",
        example: "شركة ديل لما تورد لابتوبات لوزارة التربية والتعليم، دي علاقة B2G مش B2B 🏛️"
    },
    {
        question: "Electronic commerce can increase sales and decrease costs.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "الأونلاين بيخليك تبيع لناس أكتر (زيادة مبيعات) وماتدفعش إيجار محل وكهرباء وعمالة كتير (تقليل تكاليف).",
        example: "محل ملابس أونلاين بيبيع لمحافظات تانية وهو قاعد في مكانه من غير فروع 📦💰"
    },
    {
        question: "Airline Booking System is example of electronic markets.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "موقع حجز الطيران هو سوق إلكتروني بيجمع بينك وبين شركة الطيران عشان تشتري الخدمة.",
        example: "لما تحجز تذكرة من موقع المصرية للطيران أو بوكينج، ده سوق إلكتروني ✈️"
    },
    {
        question: "Commercial transactions involve the exchange of value across organizational or individual boundaries in return for products and services.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "أي عملية تجارية هي عبارة عن 'هات وخد'. أنا بديك قيمة (فلوس) وأنت بتديني منتج أو خدمة.",
        example: "لما تشتري موبايل، أنت بتدي الفلوس والمحل بيديك الموبايل - ده تبادل قيمة 💱"
    },
    {
        question: "E-commerce is about technology. It is not a new business.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "التجارة الإلكترونية مش بس تكنولوجيا، دي طريقة بيزنس جديدة بتغير إزاي بنبيع ونشتري ونتعامل مع العملاء.",
        example: "أوبر مش مجرد أبلكيشن (تكنولوجيا)، ده بيزنس موديل كامل غير شكل المواصلات 🚗"
    },
    {
        question: "E-Commerce refers to the performing online commercial activities, transactions over internet.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "ده التعريف المباشر، أي بيع وشراء وتحويل فلوس بيحصل على النت هو تجارة إلكترونية.",
        example: "لما تشتري من جوميا أو نون، ده تجارة إلكترونية 🛒"
    },
    {
        question: "E-commerce requires the use of multiple websites, CRMS, ERPs that connect different business processes.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "اللي بيحتاج كل الأنظمة المعقدة دي وربط العمليات ببعضها هو الـ E-business. الـ E-commerce ممكن يبقى بسيط بموقع واحد.",
        example: "متجر صغير على إنستجرام ده تجارة إلكترونية من غير أنظمة معقدة 📱"
    },
    {
        question: "E business usually requires the use of only a website.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "العكس بقى، الـ E-business عملية كبيرة محتاج أنظمة كتير، مش بس موقع، محتاج سيستم مخازن وموارد بشرية وغيره.",
        example: "شركة زي أمازون عندها موقع + نظام مخازن + نظام شحن + نظام محاسبة - ده E-business 🏢"
    },
    {
        question: "E commerce includes activities like procurement of raw materials/goods, customer education, supply activities.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "الأنشطة دي (شراء مواد خام، تعليم عملاء) تندرج تحت الـ E-business، التجارة الإلكترونية (E-commerce) بتركز أكتر على عملية البيع والشراء نفسها (الترانزاكشن).",
        example: "البيع على الموقع ده E-commerce، بس تدريب الموظفين وإدارة المخزون ده E-business 📊"
    },
    {
        question: "insta-pay is an example of business to business.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "إنستا باي معمول عشان الأفراد يحولوا لبعض (C2C) أو أفراد يحولوا لمحلات (C2B)، مش شركات لبعضها بشكل أساسي.",
        example: "لما تحول لصاحبك فلوس بإنستا باي، ده C2C مش B2B 💸"
    },
    {
        question: "Competition is the most risky disadvantage of E commerce.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "المنافسة موجودة، بس أخطر عيب فعلاً هو الأمان (Security) والخصوصية، إن بياناتك تتسرق.",
        example: "لما حد يهكر الموقع ويسرق أرقام الفيزا بتوع الناس، دي كارثة أكبر من المنافسة 🔒"
    },
    {
        question: "Poor website security can allow unauthorized users to gain access to your website.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "لو الموقع أمانه ضعيف، أي هاكر ممكن يدخل يسرق بيانات العملاء أو يوقع الموقع.",
        example: "لو الموقع مافيهوش حماية SSL، الهاكر يقدر يشوف الباسوورد بتاعك وأنت بتكتبه ⚠️"
    },
    {
        question: "E commerce creates competitive advantages to the organizations.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "لما تبيع أونلاين بيبقى عندك ميزة عن اللي بيبيع أوفلاين بس (بتوصل أسرع، أرخص، متاح 24 ساعة).",
        example: "محل بيبيع أونلاين وأوفلاين هيكسب أكتر من محل أوفلاين بس 🎯"
    },
    {
        question: "Using only a website is a requirement of E commerce.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "عشان تبدأ تجارة إلكترونية، أبسط حاجة وأهم شرط هو وجود موقع (أو منصة) تبيع من عليها.",
        example: "لو عايز تبيع أونلاين، لازم على الأقل يكون عندك صفحة على فيسبوك أو موقع 🌐"
    },
    {
        question: "Availability of products and services is one advantage of E commerce.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "الحاجة متاحة قدامك 24 ساعة في الـ 7 أيام، مش مرتبط بمواعيد فتح وقفل المحل.",
        example: "تقدر تشتري من أمازون الساعة 3 الصبح، المحل العادي يكون مقفول ⏰"
    },
    {
        question: "Business model is a set of processes that combine to yield a profit.",
        type: "true-false",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "نموذج العمل (Business Model) هو الخطة اللي بتقول إزاي الشركة هتجيب فلوس وتكسب.",
        example: "نموذج عمل نتفليكس: اشتراك شهري، نموذج عمل يوتيوب: إعلانات 💡"
    },
    {
        question: "SWOT analysis is a tool of evaluating business unit opportunities.",
        type: "true-false",
        answers: ["صح", "غلط"],
        correctAnswer: 0,
        explanation: "تحليل SWOT بيوريك (نقاط القوة، الضعف، الفرص، والتهديدات) عشان تعرف راسك من رجلك في السوق.",
        example: "قوتك: منتج ممتاز، ضعفك: مافيش تسويق، فرصة: السوق كبير، تهديد: منافسين أقوى 📈"
    },
    {
        question: "E-Finance is the process of considering marketing activities and achieving marketing objectives through electronic medium.",
        type: "true-false",
        answers: ["صح", "غلط"],
        correctAnswer: 1,
        explanation: "التعريف ده بتاع E-marketing (التسويق الإلكتروني) مش الـ E-finance (التمويل الإلكتروني).",
        example: "E-finance: تحويل فلوس أونلاين، E-marketing: إعلانات على فيسبوك 💳📢"
    }
];
