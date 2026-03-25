// Product data
const products = {
    1: {
        category: 'UX/UI',
        title: 'Мобильное приложение',
        client: 'FinTech Startup',
        year: '2024',
        role: 'UX/UI Дизайнер',
        description: 'Разработка современного мобильного приложения для управления финансами. Проект включал полный цикл дизайна: от исследования пользователей до финальных макетов и прототипирования.',
        tasks: [
            'Провести исследование целевой аудитории',
            'Создать информационную архитектуру',
            'Разработать дизайн-систему',
            'Создать интерактивные прототипы',
            'Подготовить assets для разработки'
        ],
        solution: 'Создал интуитивный интерфейс с фокусом на простоту использования. Использовал минималистичный дизайн с акцентом на важные функции. Внедрил систему микроинтеракций для улучшения пользовательского опыта.'
    },
    2: {
        category: 'UX/UI',
        title: 'Веб-платформа',
        client: 'Корпорация',
        year: '2024',
        role: 'UX/UI Дизайнер',
        description: 'Комплексный редизайн корпоративного веб-сайта с улучшенной навигацией и визуальной иерархией. Проект включал аудит существующего сайта и создание нового дизайна.',
        tasks: [
            'Провести UX-аудит существующего сайта',
            'Разработать новую структуру навигации',
            'Создать современный визуальный стиль',
            'Адаптировать дизайн для всех устройств',
            'Создать компонентную библиотеку'
        ],
        solution: 'Разработал новую информационную архитектуру с улучшенной навигацией. Создал современный визуальный стиль, который отражает корпоративные ценности. Все компоненты были адаптированы для мобильных устройств.'
    },
    3: {
        category: 'WEB-разработка',
        title: 'E-commerce платформа',
        client: 'Retail Company',
        year: '2024',
        role: 'Full-stack Разработчик',
        description: 'Разработка полнофункциональной платформы для интернет-магазина с современными технологиями, оптимизацией производительности и интеграцией платежных систем.',
        tasks: [
            'Разработать архитектуру приложения',
            'Реализовать систему управления товарами',
            'Интегрировать платежные системы',
            'Оптимизировать производительность',
            'Обеспечить безопасность данных'
        ],
        solution: 'Использовал современный стек технологий для создания быстрой и надежной платформы. Реализовал систему кэширования для улучшения производительности. Внедрил лучшие практики безопасности для защиты пользовательских данных.'
    },
    4: {
        category: 'WEB-разработка',
        title: 'Корпоративный сайт',
        client: 'Tech Company',
        year: '2024',
        role: 'Frontend Разработчик',
        description: 'Создание адаптивного корпоративного сайта с интерактивными элементами и системой управления контентом. Сайт включает анимации и современные веб-технологии.',
        tasks: [
            'Разработать адаптивный дизайн',
            'Реализовать интерактивные элементы',
            'Интегрировать CMS',
            'Оптимизировать для SEO',
            'Добавить анимации и переходы'
        ],
        solution: 'Создал полностью адаптивный сайт с использованием современных CSS и JavaScript технологий. Реализовал плавные анимации и переходы для улучшения пользовательского опыта. Интегрировал систему управления контентом для удобства обновления.'
    },
    5: {
        category: 'Анимация',
        title: 'Брендинг анимация',
        client: 'Startup',
        year: '2024',
        role: 'Motion Дизайнер',
        description: 'Создание динамичной анимации логотипа и бренд-ассетов для технологического стартапа. Проект включал разработку анимационного стиля и создание различных вариантов анимации.',
        tasks: [
            'Разработать концепцию анимации',
            'Создать анимацию логотипа',
            'Разработать бренд-ассеты',
            'Создать варианты для разных платформ',
            'Подготовить файлы для разработчиков'
        ],
        solution: 'Создал уникальный анимационный стиль, который отражает инновационность бренда. Разработал несколько вариантов анимации для использования в разных контекстах. Все анимации оптимизированы для веб и мобильных платформ.'
    },
    6: {
        category: 'Анимация',
        title: 'Интерактивные переходы',
        client: 'Digital Agency',
        year: '2024',
        role: 'Motion Дизайнер',
        description: 'Разработка плавных анимаций переходов и микроинтеракций для улучшения пользовательского опыта веб-приложения. Проект включал создание библиотеки анимаций.',
        tasks: [
            'Исследовать лучшие практики анимаций',
            'Создать библиотеку переходов',
            'Разработать микроинтеракции',
            'Оптимизировать производительность',
            'Документировать использование'
        ],
        solution: 'Создал комплексную библиотеку анимаций, которая улучшает восприятие интерфейса. Все анимации оптимизированы для производительности и работают плавно на всех устройствах. Документировал использование для команды разработчиков.'
    },
    9: {
        category: 'WEB-разработка',
        title: 'INNNOWHITE',
        client: 'Беларусь',
        year: '2025',
        role: 'Full-stack Разработчик',
        price: '120 000 ₽',
        description: 'Innowhite — ведущий разработчик и производитель отбеливающей косметики для полости рта. Мы создаём инновационные продукты, которые не только эффективно отбеливают зубы, но и заботятся о здоровье вашей улыбки. Наша команда — это группа профессионалов и единомышленников, объединённых общей целью: делать улыбки ярче, а жизнь — увереннее. Мы верим, что красивая и здоровая улыбка должна быть доступной каждому, и поэтому разрабатываем безопасные, научно обоснованные и действенные решения. Продукция Innowhite создаётся с использованием современных технологий и проверенных ингредиентов. Мы строго соблюдаем стандарты качества на каждом этапе — от идеи до готового продукта.',
        tasks: [
            'Создать варфреймы и прототипы',
            'Разработать адаптивный дизайн',
            'Реализовать кросс-платформенную адаптацию',
            'Интегрировать контент-менеджмент',
            'Оптимизировать для всех устройств',
            'Довести проект до полноценного продукта'
        ],
        solution: 'Создан полнофункциональный сайт с нуля: от варфреймов до готового продукта. Реализована полная кросс-платформенная адаптация для всех устройств. Сайт отражает миссию компании по созданию безопасных и эффективных решений для отбеливания зубов.',
        link: 'https://fridrix19.github.io/innowhite_test/',
        image: 'img/inno.png'
    },
    10: {
        category: 'WEB-разработка',
        title: 'BEATFOUND',
        client: 'Зарубеж',
        year: '2025',
        role: 'Full-stack Разработчик',
        price: '50 000 ₽',
        description: 'BEATFOUND - веб-приложение (дистрибьютор), занимающееся продвижением треков и обнаружением совпадений в битах среди всех треков на площадках. Платформа помогает музыкантам и продюсерам находить похожие биты, отслеживать использование их музыки и продвигать свои треки на различных площадках.',
        tasks: [
            'Создать варфреймы и прототипы',
            'Разработать веб-приложение с функционалом дистрибьютора',
            'Реализовать систему обнаружения совпадений в битах',
            'Создать кросс-платформенную адаптацию',
            'Интегрировать API для работы с музыкальными площадками',
            'Довести проект до полноценного продукта'
        ],
        solution: 'Разработано полнофункциональное веб-приложение от концепции до реализации. Создана система для продвижения треков и обнаружения совпадений в битах. Реализована полная кросс-платформенная адаптация для работы на всех устройствах.',
        link: 'https://fridrix19.github.io/laba3vercc/index.html',
        image: 'img/beat.png'
    },
    11: {
        category: 'WEB-разработка',
        title: 'ГИГАПИН',
        client: 'Хакатон кафедры ЦИАТ',
        year: '2025',
        role: 'Разработчик (в команде с Бурмистровой Полиной)',
        price: '≈ 1 000 000 ₽',
        description: 'ГИГАПИН — образовательное приложение с системой рейтинга и геймификацией. Мы используем систему рейтинга, которая растёт за честное обучение и снижается при попытках обойти процесс. От рейтинга зависят доступные функции, бонусы и статус пользователя. Обучение построено на трёх уровнях сложности — от быстрого решения до настоящих испытаний. Поведение пользователя в каждом уровне напрямую влияет на его рейтинг и награды. За успехи выдаются поинты, за которые можно покупать одежду и аксессуары для маскота. Так внешний вид персонажа становится визуальным отражением реального прогресса.',
        tasks: [
            'Разработать систему рейтинга за честное обучение',
            'Создать три уровня сложности обучения',
            'Реализовать систему поинтов и наград',
            'Разработать систему кастомизации маскота',
            'Создать геймифицированный образовательный процесс',
            'Интегрировать визуальное отражение прогресса'
        ],
        solution: 'Создано образовательное приложение с уникальной системой мотивации. Фирменная монета стала основой внутренней экономики приложения — это универсальный символ прогресса, который пользователь зарабатывает исключительно за реальные действия, внимание и вовлечённость. Маскот отражает путь пользователя, а одежда, купленная за поинты, — наглядный результат того, что он не просто "ходил в приложение", а действительно рос и учился. Проект занял 2 место на хакатоне кафедры ЦИАТ.',
        images: ['img/giga1.png', 'img/giga2.png', 'img/giga3.png', 'img/giga4.png'],
        image: 'img/giga1.png'
    },
    12: {
        category: 'МОУШН-ДИЗАЙН',
        title: 'LAYERZERO МОУШН-ИНТЕРВЬЮ',
        client: 'LayerZero',
        year: '2025',
        role: 'Motion Дизайнер',
        price: '15 000 ₽',
        description: 'Создание анимационного оформления для интервью-шоу компании LayerZero. Проект включал разработку визуального стиля, создание переходов и интерактивных элементов в минималистичном стиле.',
        tasks: [
            'Разработать визуальную концепцию шоу',
            'Создать систему анимированных титров и плашек',
            'Реализовать плавные переходы между сценами',
            'Добавить интерактивные элементы анимации',
            'Выполнить финальный рендеринг и сборку'
        ],
        solution: 'Был разработан минималистичный и технологичный стиль анимации, соответствующий бренду LayerZero. Использование чистых линий и плавной динамики позволило создать профессиональный образ интервью-шоу.',
        image: 'img/mascot.svg' // Placeholder as it's a video
    },
    15: {
        category: 'ПРИЛОЖЕНИЯ',
        title: 'OKAK Market',
        client: 'OKAK',
        year: '2025',
        role: 'UX/UI Дизайнер',
        price: '15 000 ₽',
        description: 'OKAK Market — это современный маркетплейс для мобильных устройств. Дизайн сфокусирован на удобстве поиска товаров, прозрачности процесса покупки и приятном визуальном опыте.',
        tasks: [
            'Проектирование пользовательских сценариев',
            'Создание интерфейса каталога и карточки товара',
            'Разработка системы фильтрации и поиска',
            'Дизайн личного кабинета и корзины',
            'Подготовка макетов для разработки'
        ],
        solution: 'Создан чистый и функциональный интерфейс маркетплейса. Особое внимание уделено навигации и визуальному представлению товаров, что позволяет пользователям быстро находить и приобретать нужные позиции.',
        heroImages: [
            'img/app/mocup/Okakmarketmain (Bezel).png',
            'img/app/mocup/okak2 (Bezel).png',
            'img/app/mocup/Okakmarketmain (Bezel).png'
        ],
        image: 'img/app/mocup/Okakmarketmain (Bezel).png'
    },
    17: {
        category: 'ПРИЛОЖЕНИЯ',
        title: 'Solo Leveling App',
        client: 'Personal Project',
        year: '2025',
        role: 'UX/UI Дизайнер',
        price: '30 000 ₽',
        description: 'Приложение для отслеживания прогресса и геймификации повседневных задач, вдохновленное стилистикой Solo Leveling. Позволяет пользователям "прокачивать" свои реальные навыки.',
        tasks: [
            'Разработка уникального визуального стиля в духе RPG',
            'Создание системы статусов и уровней',
            'Дизайн интерфейса задач и достижений',
            'Проектирование интерактивных элементов прогресса',
            'Адаптация под различные мобильные экраны'
        ],
        solution: 'Разработан темный, агрессивный интерфейс с яркими акцентами, создающий атмосферу игры. Геймификация помогает пользователям сохранять мотивацию при выполнении рутинных задач.',
        heroImages: [
            'img/app/mocup/solomain (Bezel).png',
            'img/app/mocup/Sololevel (Bezel).png',
            'img/app/mocup/solo2 (Bezel).png',
            'img/app/mocup/solo3 (Bezel).png',
            'img/app/mocup/solo4 (Bezel).png'
        ],
        image: 'img/app/mocup/solomain (Bezel).png'
    },
    19: {
        category: 'ПРИЛОЖЕНИЯ',
        title: 'Bank App Concept',
        client: 'Concept Project',
        year: '2025',
        role: 'UX/UI Дизайнер',
        price: '15 000 ₽',
        description: 'Концепт банковского приложения с упором на безопасность и современную эстетику. Интерфейс объединяет сложные финансовые инструменты в простую и понятную форму.',
        tasks: [
            'Анализ банковских интерфейсов конкурентов',
            'Создание минималистичной дизайн-системы',
            'Дизайн экранов транзакций и счетов',
            'Проектирование системы уведомлений',
            'Создание мокапов в реальных устройствах'
        ],
        solution: 'Использование "стеклянных" элементов (glassmorphism) и четкой типографики позволило создать ощущение премиальности и надежности продукта.',
        heroImages: [
            'img/app/mocup/Bankmain (Bezel).png',
            'img/app/mocup/bank2 (Bezel).png',
            'img/app/mocup/bank3 (Bezel).png'
        ],
        image: 'img/app/Bankmain.png'
    },
    20: {
        category: 'WEB-разработка',
        title: 'Zenitra',
        client: 'Zenitra Ecosystem',
        year: '2024',
        role: 'Lead Designer / Frontend Developer',
        price: '100 000 ₽',
        description: 'Zenitra — это технологичный веб-проект, представляющий собой экосистему для управления цифровыми активами. Проект объединяет в себе сложное техническое решение и современный визуальный язык, ориентированный на сферу Web3 и высоких технологий. Основная задача заключалась в создании интерфейса, который делает сложные блокчейн-процессы понятными и доступными для пользователя.',
        tasks: [
            'Разработка визуальной идентичности бренда',
            'Проектирование архитектуры и UI/UX платформы',
            'Создание детальной дорожной карты проекта (Roadmap)',
            'Дизайн системы токеномики и визуализация активов',
            'Разработка адаптивного лендинга с высокой производительностью'
        ],
        solution: 'Был разработан минималистичный интерфейс с акцентом на типографику и чистоту пространства, что подчеркивает технологичность Zenitra. В рамках проекта были созданы детализированные макеты страниц и интерактивная PDF-презентация, которая раскрывает стратегию развития и техническую базу продукта. Использование контрастных элементов позволило выделить ключевые этапы дорожной карты и функционал токенов.',
        image: 'img/zenitraproject/preview/1.png',
        previewImages: [
            'img/zenitraproject/preview/1.png',
            'img/zenitraproject/preview/2.png',
            'img/zenitraproject/preview/3.png',
            'img/zenitraproject/preview/4.png',
            'img/zenitraproject/preview/5.png',
            'img/zenitraproject/preview/6.png',
            'img/zenitraproject/preview/7.png'
        ],
        images: [
            'img/zenitraproject/preview/1.png',
            'img/zenitraproject/preview/2.png',
            'img/zenitraproject/preview/3.png',
            'img/zenitraproject/preview/4.png',
            'img/zenitraproject/preview/5.png',
            'img/zenitraproject/preview/6.png',
            'img/zenitraproject/preview/7.png'
        ],
        pdfs: [
            { title: 'Main Page', file: 'img/zenitraproject/mainpage.pdf' },
            { title: 'Presentation', file: 'img/zenitraproject/presentation_project.pdf' },
            { title: 'Roadmap', file: 'img/zenitraproject/ruadmap.pdf' },
            { title: 'Token', file: 'img/zenitraproject/token.pdf' }
        ],
        hideGallery: true
    },
    21: {
        category: 'WEB-разработка',
        title: 'Акселератор',
        client: 'Проект акселератора',
        year: '2024',
        role: 'Дизайн / Вёрстка',
        price: '90 000 ₽',
        description: 'Лендинг для проекта акселератора: адаптивная структура, акцент на ясной подаче ценности и быстрых CTA. В материалах — мобильная версия и презентация для десктопа.',
        tasks: [
            'Проектирование структуры лендинга',
            'Дизайн адаптивных экранов (desktop/mobile)',
            'Подготовка презентационных материалов (PDF)',
            'Сборка и проверка визуальной консистентности'
        ],
        solution: 'Был собран аккуратный лендинг с понятной логикой блоков и адаптацией под мобильные устройства. Дополнительно подготовлены презентационные материалы для демонстрации концепции на разных носителях.',
        image: 'img/axseliratorproject/preview/1.png',
        previewImages: [
            'img/axseliratorproject/preview/1.png',
            'img/axseliratorproject/preview/2.png',
            'img/axseliratorproject/preview/3.png',
            'img/axseliratorproject/preview/4.png',
            'img/axseliratorproject/preview/5.png',
            'img/axseliratorproject/preview/6.png',
            'img/axseliratorproject/landing_mobile.png'
        ],
        pdfs: [
            { title: 'Desktop (PDF)', file: 'img/axseliratorproject/lamding_pc.pdf' }
        ]
    },
    22: {
        category: 'WEB-разработка',
        title: 'Kotopoliten',
        client: 'Kotopoliten',
        year: '2025',
        role: 'UI/UX Дизайнер',
        price: '50 000 ₽',
        description: 'Концепт лендинга: разработана структура страницы, визуальная система и набор ключевых экранов для презентации идеи. Материалы собраны в превью и PDF, чтобы удобно показывать проект заказчику.',
        tasks: [
            'Проектирование структуры лендинга и логики блоков',
            'Разработка визуальной системы (типографика, сетка, акценты)',
            'Дизайн ключевых экранов/секций',
            'Подготовка презентации (PDF) и превью для портфолио'
        ],
        solution: 'Был создан цельный концепт лендинга с ясной иерархией, акцентами на ценности продукта и понятными точками действия. Итог оформлен как комплект превью и PDF-презентация.',
        image: 'img/kotopolitenproject/preview/1.png',
        previewImages: [
            'img/kotopolitenproject/preview/1.png',
            'img/kotopolitenproject/preview/2.png',
            'img/kotopolitenproject/preview/3.png',
            'img/kotopolitenproject/preview/4.png'
        ],
        pdfs: [
            { title: 'Main (PDF)', file: 'img/kotopolitenproject/main.pdf' }
        ]
    },
    23: {
        category: 'WEB-разработка',
        title: 'Музей Хаоса',
        client: 'Музей Хаоса',
        year: '2025',
        role: 'UI/UX Дизайнер',
        price: '40 000 ₽',
        description: 'Концепт лендинга для “Музея Хаоса”: собраны референсы, разработана визуальная подача и вариативные макеты ключевых блоков. Проект оформлен в превью и двух версиях PDF для презентации.',
        tasks: [
            'Формирование визуального направления (референсы)',
            'Проектирование структуры лендинга и ключевых сценариев',
            'Дизайн ключевых секций/экранов (вариативность решений)',
            'Подготовка финальных PDF-версий и превью'
        ],
        solution: 'Был подготовлен концепт лендинга с выразительной атмосферой и понятной структурой: превью ключевых экранов, референс для фиксации направления и две PDF-версии для разных сценариев демонстрации.',
        image: 'img/musemproject/preview/1.png',
        previewImages: [
            'img/musemproject/preview/1.png',
            'img/musemproject/preview/2.png',
            'img/musemproject/preview/3.png',
            'img/musemproject/referense/referense.png'
        ],
        pdfs: [
            { title: 'Main (PDF)', file: 'img/musemproject/main.pdf' },
            { title: 'Main (Form) (PDF)', file: 'img/musemproject/main(form).pdf' }
        ]
    },
    24: {
        category: 'ГРАФИЧЕСКИЙ ДИЗАЙН',
        title: 'Презентация мероприятия',
        client: 'Event',
        year: '2025',
        role: 'Графический дизайнер',
        price: '30 000 ₽',
        description: 'Серия слайдов/экранов для презентации мероприятия: единая визуальная система, динамика и акценты на ключевых блоках.',
        tasks: [
            'Разработка визуального стиля презентации',
            'Сборка набора слайдов',
            'Подготовка превью для портфолио'
        ],
        solution: 'Был собран последовательный набор экранов с единым стилем и понятной иерархией, подходящий для демонстрации на экране и публикации в кейсе.',
        image: 'img/presentation_project_meripriyatie/preview/9(previewmain).png',
        previewImages: [
            'img/presentation_project_meripriyatie/preview/9(previewmain).png',
            'img/presentation_project_meripriyatie/preview/1.png',
            'img/presentation_project_meripriyatie/preview/2.png',
            'img/presentation_project_meripriyatie/preview/3.png',
            'img/presentation_project_meripriyatie/preview/4.png',
            'img/presentation_project_meripriyatie/preview/5.png',
            'img/presentation_project_meripriyatie/preview/6.png',
            'img/presentation_project_meripriyatie/preview/7.png',
            'img/presentation_project_meripriyatie/preview/8.png',
            'img/presentation_project_meripriyatie/preview/10.png',
            'img/presentation_project_meripriyatie/preview/11.png',
            'img/presentation_project_meripriyatie/preview/12.png',
            'img/presentation_project_meripriyatie/preview/13.png'
        ],
        hideGallery: true
    },
    25: {
        category: 'ГРАФИЧЕСКИЙ ДИЗАЙН',
        title: 'Редизайн меню “Серебряные приборы”',
        client: 'Серебряные приборы',
        year: '2024',
        role: 'Графический дизайнер',
        price: '10 000 ₽',
        description: 'Редизайн меню с фокусом на типографику, читабельность и аккуратную визуальную структуру.',
        tasks: [
            'Обновление типографики и сетки',
            'Повышение читабельности и иерархии',
            'Подготовка итоговых макетов'
        ],
        solution: 'Был подготовлен обновлённый дизайн меню: структурная сетка, выделение ключевых блоков и чистая подача контента.',
        image: 'img/redisign_menu_serebreanye_pribory/1.png',
        previewImages: [
            'img/redisign_menu_serebreanye_pribory/1.png',
            'img/redisign_menu_serebreanye_pribory/2.png'
        ],
        hideGallery: true
    },
    26: {
        category: 'ГРАФИЧЕСКИЙ ДИЗАЙН',
        title: 'Retro Walna',
        client: 'Retro Walna',
        year: '2025',
        role: 'Графический дизайнер',
        price: '15 000 ₽',
        description: 'Серия визуальных материалов в ретро-эстетике: работа с формой, композицией и вариативностью решений.',
        tasks: [
            'Разработка нескольких вариантов визуального решения',
            'Работа с композицией и контрастами',
            'Подготовка превью для кейса'
        ],
        solution: 'Был подготовлен набор вариаций в едином стиле, собранный в превью-кадры для портфолио.',
        image: 'img/retro_walna/3(preview).png',
        previewImages: [
            'img/retro_walna/3(preview).png',
            'img/retro_walna/1.png',
            'img/retro_walna/2.png',
            'img/retro_walna/4.png',
            'img/retro_walna/5.png'
        ],
        hideGallery: true
    },
    27: {
        category: 'ПРИЛОЖЕНИЯ',
        title: 'FirstPower',
        client: 'FirstPower',
        year: '2024',
        role: 'UX/UI Дизайнер',
        price: '150 000 ₽',
        description: 'Дизайн мобильного приложения с набором ключевых экранов и мокапом для презентации. Фокус на логике сценариев и визуальной целостности интерфейса.',
        tasks: [
            'Проработка основных пользовательских сценариев',
            'Дизайн ключевых экранов',
            'Подготовка мокапа для презентации',
            'Сборка превью для портфолио'
        ],
        solution: 'Был сформирован набор экранов и мокап, позволяющие быстро показать функциональность и визуальный стиль приложения.',
        heroImages: [
            'img/app/app_firstpower/mocup/mocup.png',
            'img/app/app_firstpower/preview_on_page_view/1(main).png',
            'img/app/app_firstpower/preview_on_page_view/2.png',
            'img/app/app_firstpower/preview_on_page_view/3.png',
            'img/app/app_firstpower/preview_on_page_view/4.png'
        ],
        image: 'img/app/app_firstpower/mocup/mocup.png'
    },
    28: {
        category: 'МОУШН-ДИЗАЙН',
        title: 'LayerZero V2 — Timeline / Recap',
        client: 'LayerZero',
        year: '2025',
        role: 'Motion Designer',
        price: '30 000 ₽',
        description: 'Динамичное моушн-видео в стиле LayerZero: таймлайн ключевых событий (V2 релиз, экосистемные апдейты, комьюнити-майлстоуны) с акцентом на типографику, графику и ритм монтажа.',
        tasks: [
            'Построение сторителлинга таймлайна по датам и событиям',
            'Дизайн типографики и графических переходов',
            'Монтаж/анимация под музыкальный ритм',
            'Сборка финального ролика и подготовка под публикацию'
        ],
        solution: 'Был собран “таймлайн-ролик” с последовательной структурой: даты → ключевые заголовки → визуальные вставки. Стиль выдержан в минималистичной черно‑белой эстетике LayerZero, чтобы текст читался мгновенно, а динамика ощущалась как единый клип.',
        vimeoUrl: 'https://player.vimeo.com/video/1153267206?badge=0&autopause=0&player_id=0&app_id=58479'
    },
    29: {
        category: 'МОУШН-ДИЗАЙН',
        title: 'lzRead — Intro / Showreel',
        client: 'LayerZero',
        year: '2025',
        role: 'Motion Designer',
        price: '10 000 ₽',
        description: 'Интро‑ролик для lzRead: визуальное объяснение концепции “read data from anywhere” через типографику, контрастную графику и последовательные смысловые блоки (Prove/Price/Govern/Sync, How to use, Applications).',
        tasks: [
            'Дизайн титров и визуальной системы ролика',
            'Анимация смысловых секций и инфографики',
            'Сведение темпа/переходов под музыку',
            'Финальная сборка и экспорт'
        ],
        solution: 'Был создан ролик с четкой “презентационной” логикой: тезис → пояснение → примеры применения → финальный эпичный аутро‑слоган. Визуальный язык выдержан в фирменной эстетике LayerZero.',
        vimeoUrl: 'https://player.vimeo.com/video/1153267214?badge=0&autopause=0&player_id=0&app_id=58479'
    },
    30: {
        category: 'МОУШН-ДИЗАЙН',
        title: 'Typography Slide — LayerZero',
        client: 'LayerZero',
        year: '2025',
        role: 'Motion Designer',
        price: '30 000 ₽',
        description: 'Типографическая сценка с крупными заголовками и графическими акцентами. Фокус на динамике появления текста, чистоте сетки и контрасте.',
        tasks: [
            'Типографика и композиция',
            'Анимация появления/раскрытия текста',
            'Финальный рендер'
        ],
        solution: 'Был собран лаконичный типографический клип: крупный заголовок, точные тайминги, минималистичная графика и выразительная подача.',
        vimeoUrl: 'https://player.vimeo.com/video/1153267200?badge=0&autopause=0&player_id=0&app_id=58479'
    }
};

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id') || '1';

// Load product data
const product = products[productId];

// Lightbox state
let lightboxInitialized = false;
let lightboxImages = [];
let lightboxIndex = 0;
let lightboxTouchStartX = 0;
let lightboxTouchStartY = 0;

function isMobileViewport() {
    return window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
}

// Function to load product data
function loadProductData() {
    if (!product) return;
    
    const categoryEl = document.getElementById('productCategory');
    const titleEl = document.getElementById('productTitle');
    const clientEl = document.getElementById('productClient');
    const yearEl = document.getElementById('productYear');
    const roleEl = document.getElementById('productRole');
    const priceContainer = document.getElementById('productPriceContainer');
    const priceEl = document.getElementById('productPrice');
    const descriptionEl = document.getElementById('productDescription');
    const solutionEl = document.getElementById('productSolution');
    const tasksList = document.getElementById('productTasks');
    
    if (categoryEl) categoryEl.textContent = product.category;
    if (titleEl) titleEl.textContent = product.title;
    if (clientEl) clientEl.textContent = product.client;
    if (yearEl) yearEl.textContent = product.year;
    if (roleEl) roleEl.textContent = product.role;
    if (descriptionEl) descriptionEl.textContent = product.description;
    if (solutionEl) solutionEl.textContent = product.solution;

    if (priceContainer && priceEl && product.price) {
        priceEl.textContent = product.price;
        priceContainer.style.display = 'flex';
    } else if (priceContainer) {
        priceContainer.style.display = 'none';
    }
    
    if (tasksList) {
        tasksList.innerHTML = '';
        product.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            tasksList.appendChild(li);
        });
    }
    
    // Show link if available
    const linkContainer = document.getElementById('productLinkContainer');
    const productLink = document.getElementById('productLink');
    if (product.link && linkContainer && productLink) {
        productLink.href = product.link;
        productLink.setAttribute('target', '_blank');
        productLink.setAttribute('rel', 'noopener noreferrer');
        linkContainer.style.display = 'block';
    } else if (linkContainer) {
        linkContainer.style.display = 'none';
    }

    // Show PDFs if available
    const pdfContainer = document.getElementById('productPdfContainer');
    const pdfList = document.getElementById('pdfList');
    const pdfItems = Array.isArray(product.pdfs) ? product.pdfs : (product.pdf ? [{ title: 'PDF', file: product.pdf }] : []);
    if (pdfContainer && pdfList && pdfItems.length > 0) {
        pdfList.innerHTML = pdfItems.map((item, idx) => {
            const safeTitle = item.title || `PDF ${idx + 1}`;
            const file = item.file;
            const iframeSrc = `${file}#toolbar=0&navpanes=0&scrollbar=1`;
            return `
                <div class="pdf-item">
                    <div class="pdf-item-header">
                        <h3 class="pdf-item-title">${safeTitle}</h3>
                        <a href="${file}" target="_blank" rel="noopener noreferrer" class="detail-link">Открыть PDF →</a>
                    </div>
                    <div class="pdf-viewer-wrapper">
                        <iframe src="${iframeSrc}" loading="lazy" frameborder="0"></iframe>
                    </div>
                </div>
            `;
        }).join('');
        pdfContainer.style.display = 'block';
    } else if (pdfContainer) {
        pdfContainer.style.display = 'none';
        if (pdfList) pdfList.innerHTML = '';
    }
    
    // Update hero (image / apps / video)
    const heroImageContainer = document.getElementById('productHeroImage');
    if (heroImageContainer) {
        if (product.vimeoUrl) {
            heroImageContainer.classList.remove('multi-hero');
            heroImageContainer.classList.add('video-hero');
            heroImageContainer.classList.remove('app-hero');
            heroImageContainer.style.backgroundImage = 'none';
            heroImageContainer.style.background = 'transparent';
            heroImageContainer.style.border = 'none';
            heroImageContainer.innerHTML = `
                <div class="vimeo-hero-wrapper">
                    <iframe
                        src="${product.vimeoUrl}"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        title="${product.title}">
                    </iframe>
                </div>
            `;
        } else if (product.heroImages && product.heroImages.length > 0) {
            const useSingleForMobileApps = product.category === 'ПРИЛОЖЕНИЯ' && isMobileViewport() && product.image;
            if (useSingleForMobileApps) {
                // Apps on mobile: show only ONE image to avoid breaking layout
                heroImageContainer.classList.remove('multi-hero');
                heroImageContainer.classList.remove('video-hero');
                heroImageContainer.innerHTML = '';
                heroImageContainer.style.background = '';
                heroImageContainer.style.border = '';
                heroImageContainer.classList.add('app-hero');
                heroImageContainer.style.backgroundImage = 'none';
                heroImageContainer.innerHTML = `<img src="${product.image}" alt="${product.title}" class="app-hero-img">`;
            } else {
                heroImageContainer.classList.add('multi-hero');
                heroImageContainer.classList.remove('video-hero');
                heroImageContainer.classList.remove('app-hero');
                heroImageContainer.style.backgroundImage = 'none';
                heroImageContainer.style.border = 'none';
                heroImageContainer.style.background = 'transparent';
                heroImageContainer.innerHTML = product.heroImages.map(img => `<img src="${img}" class="hero-multi-img">`).join('');
            }
        } else if (product.image) {
            heroImageContainer.classList.remove('multi-hero');
            heroImageContainer.classList.remove('video-hero');
            heroImageContainer.classList.remove('app-hero');
            heroImageContainer.innerHTML = '';
            heroImageContainer.style.background = '';
            heroImageContainer.style.border = '';
            heroImageContainer.style.backgroundImage = `url('${product.image}')`;
            heroImageContainer.style.backgroundSize = 'contain';
            heroImageContainer.style.backgroundPosition = 'center';
            heroImageContainer.style.backgroundRepeat = 'no-repeat';
        }
    }

    // Setup hero preview thumbnails (optional)
    if (product.category === 'ПРИЛОЖЕНИЯ' && isMobileViewport()) {
        // Hide preview thumbs for apps on mobile
        setupHeroPreview(null, heroImageContainer, product.image);
    } else {
        setupHeroPreview(product.previewImages, heroImageContainer, product.image);
    }
    initLightboxOnce();
    if (!product.vimeoUrl) wireLightboxForCurrentProduct(heroImageContainer);
    
    // Setup gallery or slider
    const galleryContainer = document.getElementById('galleryContainer');
    const productSlider = document.getElementById('productSlider');
    const productGallerySection = document.getElementById('productGallery');
    
    // Hide gallery section for apps and for projects that opt-out (e.g. when gallery is shown in hero)
    if ((product.category === 'ПРИЛОЖЕНИЯ' || product.hideGallery) && productGallerySection) {
        productGallerySection.style.display = 'none';
    } else if (product.images && product.images.length > 0) {
        if (productGallerySection) productGallerySection.style.display = 'block';
        // Show slider for projects with multiple images
        if (galleryContainer) galleryContainer.style.display = 'none';
        if (productSlider) {
            productSlider.style.display = 'block';
            setupSlider(product.images);
        }
    } else {
        // No gallery assets: hide gallery section (avoid empty placeholders)
        if (productGallerySection) productGallerySection.style.display = 'none';
        if (productSlider) productSlider.style.display = 'none';
        if (galleryContainer) {
            galleryContainer.innerHTML = '';
            galleryContainer.style.display = 'none';
        }
    }
    
    // Update page title
    document.title = `${product.title} — FRIDRIX`;
    
    // Setup next project link
    setupNextProjectLink(Number(productId));
}

// Setup next project link
function setupNextProjectLink(currentId) {
    const nextLink = document.querySelector('.next-project-link');
    if (!nextLink) return;
    
    // Get all product IDs, sorted
    const allIds = Object.keys(products).map(Number).sort((a, b) => a - b);
    if (allIds.length === 0) {
        nextLink.href = 'index.html';
        return;
    }
    
    // Find current index
    const currentIndex = allIds.indexOf(currentId);
    let nextId;
    
    if (currentIndex === -1 || currentIndex === allIds.length - 1) {
        // If not found or is last, go to first
        nextId = allIds[0];
    } else {
        // Otherwise, go to next
        nextId = allIds[currentIndex + 1];
    }
    
    nextLink.href = `product.html?id=${nextId}`;
}

// Load product data when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProductData);
} else {
    loadProductData();
}

// Slider functionality
function setupSlider(images) {
    const sliderTrack = document.getElementById('sliderTrack');
    const sliderDots = document.getElementById('sliderDots');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    
    if (!sliderTrack || !sliderDots) return;
    
    let currentSlide = 0;
    
    // Clear existing content
    sliderTrack.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // Create slider items
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'slider-item';
        item.style.backgroundImage = `url('${image}')`;
        item.addEventListener('click', () => openLightbox(images, index));
        sliderTrack.appendChild(item);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    
    function goToSlide(index) {
        currentSlide = index;
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        const dots = sliderDots.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
        
        // Update buttons
        if (sliderPrev) sliderPrev.disabled = currentSlide === 0;
        if (sliderNext) sliderNext.disabled = currentSlide === images.length - 1;
    }
    
    function nextSlide() {
        if (currentSlide < images.length - 1) {
            goToSlide(currentSlide + 1);
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    }
    
    // Event listeners
    if (sliderNext) {
        sliderNext.addEventListener('click', nextSlide);
    }
    if (sliderPrev) {
        sliderPrev.addEventListener('click', prevSlide);
    }
    
    // Initialize
    goToSlide(0);
    
    // Auto-play (optional)
    // setInterval(() => {
    //     if (currentSlide < images.length - 1) {
    //         nextSlide();
    //     } else {
    //         goToSlide(0);
    //     }
    // }, 5000);
}

// Hero preview thumbnails (under main preview)
function setupHeroPreview(images, heroImageContainer, currentImage) {
    const previewWrapper = document.getElementById('productHeroPreview');
    const track = document.getElementById('heroPreviewTrack');
    const prevBtn = document.getElementById('heroPreviewPrev');
    const nextBtn = document.getElementById('heroPreviewNext');

    if (!previewWrapper || !track || !prevBtn || !nextBtn || !heroImageContainer) return;

    if (!Array.isArray(images) || images.length <= 1) {
        previewWrapper.style.display = 'none';
        track.innerHTML = '';
        return;
    }

    let currentIndex = Math.max(0, images.indexOf(currentImage));

    track.innerHTML = '';
    const thumbButtons = images.map((src, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'hero-preview-thumb' + (idx === currentIndex ? ' active' : '');
        btn.innerHTML = `<img src="${src}" alt="">`;
        btn.addEventListener('click', () => setCurrent(idx));
        track.appendChild(btn);
        return btn;
    });

    function setCurrent(idx) {
        currentIndex = idx;
        heroImageContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
        thumbButtons.forEach((b, i) => b.classList.toggle('active', i === currentIndex));
        const active = thumbButtons[currentIndex];
        if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    prevBtn.onclick = () => setCurrent((currentIndex - 1 + images.length) % images.length);
    nextBtn.onclick = () => setCurrent((currentIndex + 1) % images.length);

    previewWrapper.style.display = 'flex';
    setCurrent(currentIndex);
}

function initLightboxOnce() {
    if (lightboxInitialized) return;
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const content = document.getElementById('lightboxContent');

    if (!lightbox || !closeBtn || !prevBtn || !nextBtn || !content) return;

    const onClose = () => closeLightbox();
    closeBtn.addEventListener('click', onClose);

    // Click outside image closes
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    prevBtn.addEventListener('click', () => showLightboxIndex(lightboxIndex - 1));
    nextBtn.addEventListener('click', () => showLightboxIndex(lightboxIndex + 1));

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') return closeLightbox();
        if (e.key === 'ArrowLeft') return showLightboxIndex(lightboxIndex - 1);
        if (e.key === 'ArrowRight') return showLightboxIndex(lightboxIndex + 1);
    });

    // Swipe on mobile
    content.addEventListener('touchstart', (e) => {
        const t = e.touches && e.touches[0];
        if (!t) return;
        lightboxTouchStartX = t.clientX;
        lightboxTouchStartY = t.clientY;
    }, { passive: true });

    content.addEventListener('touchend', (e) => {
        const t = e.changedTouches && e.changedTouches[0];
        if (!t) return;
        const dx = t.clientX - lightboxTouchStartX;
        const dy = t.clientY - lightboxTouchStartY;
        // Horizontal swipe only
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            if (dx > 0) showLightboxIndex(lightboxIndex - 1);
            else showLightboxIndex(lightboxIndex + 1);
        }
    }, { passive: true });

    lightboxInitialized = true;
}

function openLightbox(images, startIndex = 0) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !Array.isArray(images) || images.length === 0) return;
    lightboxImages = images.slice();
    lightboxIndex = Math.max(0, Math.min(startIndex, lightboxImages.length - 1));
    document.body.style.overflow = 'hidden';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    showLightboxIndex(lightboxIndex);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function showLightboxIndex(nextIndex) {
    const img = document.getElementById('lightboxImage');
    if (!img || !Array.isArray(lightboxImages) || lightboxImages.length === 0) return;
    const len = lightboxImages.length;
    lightboxIndex = (nextIndex % len + len) % len;
    img.src = lightboxImages[lightboxIndex];
}

function wireLightboxForCurrentProduct(heroImageContainer) {
    if (!heroImageContainer) return;

    // For multi-hero images (apps), bind clicks on actual <img>
    const heroImgs = heroImageContainer.querySelectorAll('.hero-multi-img');
    if (heroImgs && heroImgs.length > 0) {
        const imgs = Array.from(heroImgs).map(el => el.getAttribute('src')).filter(Boolean);
        heroImgs.forEach((el, idx) => {
            el.style.cursor = 'pointer';
            el.addEventListener('click', () => openLightbox(imgs, idx));
        });
        return;
    }

    // For hero preview projects: use previewImages if present, else fallback
    const images = Array.isArray(product.previewImages) && product.previewImages.length > 0
        ? product.previewImages
        : (Array.isArray(product.images) && product.images.length > 0 ? product.images : (product.image ? [product.image] : []));

    if (images.length === 0) return;

    // Click on hero opens lightbox. Try to match current background image to index.
    heroImageContainer.style.cursor = 'pointer';
    heroImageContainer.onclick = () => {
        const bg = heroImageContainer.style.backgroundImage || '';
        const match = bg.match(/url\(['"]?(.*?)['"]?\)/i);
        const innerImg = heroImageContainer.querySelector('img');
        const current = (match && match[1])
            ? match[1]
            : (innerImg && innerImg.getAttribute('src') ? innerImg.getAttribute('src') : images[0]);
        const idx = Math.max(0, images.indexOf(current));
        openLightbox(images, idx);
    };

    // Also make thumbs clickable (they already switch hero; lightbox opens by clicking big hero)
}

