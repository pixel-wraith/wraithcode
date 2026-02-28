<script lang="ts">
    import dayjs from 'dayjs';

    export let data;

    const readings = [
        {
            title: 'Designing Data-Intensive Applications',
            author: 'Martin Kleppmann',
            type: 'book' as const,
            url: 'https://dataintensive.net/',
        },
        {
            title: 'The Pragmatic Programmer',
            author: 'David Thomas & Andrew Hunt',
            type: 'book' as const,
            url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/',
        },
        {
            title: 'Clean Code',
            author: 'Robert C. Martin',
            type: 'book' as const,
            url: 'https://www.oreilly.com/library/view/clean-code-a/9780136083238/',
        },
        {
            title: 'A Complete Guide to CSS Grid',
            author: 'CSS-Tricks',
            type: 'article' as const,
            url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        },
        {
            title: 'The Missing Semester of Your CS Education',
            author: 'MIT',
            type: 'article' as const,
            url: 'https://missing.csail.mit.edu/',
        },
    ];
</script>

<div class="page">
    <!-- Dot grid background -->
    <div class="bg-grid" aria-hidden="true"></div>

    <!-- Hero -->
    <section class="hero">
        <div class="hero-glow" aria-hidden="true"></div>
        <div class="hero-icon">
            <i class="fa-regular fa-ghost"></i>
        </div>
        <h1 class="hero-title">Wraithcode</h1>
        <p class="tagline">
            A playground for exploring new tech, wild ideas, and random side projects.
            This is where I build, break, learn, and share it all with the world.
        </p>
        <div class="hero-stats">
            <div class="stat">
                <span class="stat-number">{data.experiments.length}+</span>
                <span class="stat-label">Experiments</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
                <span class="stat-number">{readings.length}</span>
                <span class="stat-label">Reads</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
                <span class="stat-number"><i class="fa-solid fa-infinity"></i></span>
                <span class="stat-label">Curiosity</span>
            </div>
        </div>
    </section>

    <!-- Divider -->
    <div class="section-divider" aria-hidden="true">
        <div class="divider-line"></div>
        <i class="fa-solid fa-terminal"></i>
        <div class="divider-line"></div>
    </div>

    <!-- Latest Experiments -->
    <section class="section stagger-in">
        <div class="section-header">
            <div class="section-icon">
                <i class="fa-solid fa-flask"></i>
            </div>
            <div>
                <h2>Latest Experiments</h2>
                <p class="section-desc">The most recent things I've been tinkering with.</p>
            </div>
        </div>
        <div class="experiments-grid">
            {#each data.experiments as experiment, i}
                <a
                    href={experiment.route}
                    class="experiment-card"
                    class:featured={i === 0}
                    style="--delay: {i * 80}ms"
                >
                    <span class="card-number" aria-hidden="true">0{i + 1}</span>
                    <div class="card-content">
                        <div class="card-header">
                            <h3>{experiment.name}</h3>
                            <span class="card-date">
                                <i class="fa-regular fa-clock"></i>
                                {dayjs(experiment.createdAt).format('MMM D, YYYY')}
                            </span>
                        </div>
                        <p>{experiment.description}</p>
                        <span class="card-link">
                            Explore <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    <div class="card-glow" aria-hidden="true"></div>
                </a>
            {/each}
        </div>
        <a href="/experiments" class="view-all">
            <span>View all experiments</span>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    </section>

    <!-- Divider -->
    <div class="section-divider" aria-hidden="true">
        <div class="divider-line"></div>
        <i class="fa-solid fa-code"></i>
        <div class="divider-line"></div>
    </div>

    <!-- Reading List -->
    <section class="section stagger-in">
        <div class="section-header">
            <div class="section-icon alt">
                <i class="fa-solid fa-book-open"></i>
            </div>
            <div>
                <h2>Reading List</h2>
                <p class="section-desc">Books and articles that have shaped how I think about building software.</p>
            </div>
        </div>
        <div class="readings-list">
            {#each readings as item, i}
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reading-item"
                    style="--delay: {i * 60}ms"
                >
                    <div class="reading-number">{String(i + 1).padStart(2, '0')}</div>
                    <div class="reading-icon" class:article={item.type === 'article'}>
                        <i class="fa-solid {item.type === 'book' ? 'fa-book' : 'fa-newspaper'}"></i>
                    </div>
                    <div class="reading-info">
                        <span class="reading-title">{item.title}</span>
                        <span class="reading-author">{item.author}</span>
                    </div>
                    <span class="reading-badge" class:article-badge={item.type === 'article'}>{item.type}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                </a>
            {/each}
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-ghost"><i class="fa-regular fa-ghost"></i></div>
        <p>built with curiosity & caffeine</p>
    </footer>
</div>

<style>
    /* ---- Page & Background ---- */
    .page {
        position: relative;
        max-width: 960px;
        margin: 0 auto;
        padding: 2rem 1.5rem 2rem;
        overflow: hidden;
    }

    .bg-grid {
        position: fixed;
        inset: 0;
        background-image: radial-gradient(circle, var(--neutral-300) 0.5px, transparent 0.5px);
        background-size: 32px 32px;
        opacity: 0.15;
        pointer-events: none;
        z-index: 0;
    }

    .page > *:not(.bg-grid) {
        position: relative;
        z-index: 1;
    }

    /* ---- Hero ---- */
    .hero {
        text-align: center;
        padding: 4rem 0 2.5rem;
        position: relative;
    }

    .hero-glow {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, var(--primary-200) 0%, transparent 70%);
        opacity: 0.08;
        pointer-events: none;
        animation: pulse-glow 6s ease-in-out infinite;
    }

    @keyframes pulse-glow {
        0%, 100% { opacity: 0.06; transform: translateX(-50%) scale(1); }
        50% { opacity: 0.12; transform: translateX(-50%) scale(1.15); }
    }

    .hero-icon {
        font-size: 5rem;
        color: var(--primary-500);
        filter: drop-shadow(0 0 40px var(--primary-300)) drop-shadow(0 0 80px var(--primary-200));
        margin-bottom: 1.25rem;
        animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-14px); }
    }

    .hero-title {
        font-size: 3rem;
        letter-spacing: 0.2rem;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 40%, var(--alt1-500) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .tagline {
        max-width: 560px;
        margin: 0 auto;
        color: var(--neutral-600);
        font-family: var(--sub-font);
        font-size: 1.05rem;
        line-height: 1.7rem;
    }

    /* ---- Hero Stats ---- */
    .hero-stats {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 2.5rem;
        padding: 1rem 2rem;
        background: var(--neutral-150);
        border: 1px solid var(--neutral-250);
        border-radius: 12px;
        display: inline-flex;
    }

    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.2rem;
    }

    .stat-number {
        font-family: var(--header-font);
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary-500);
    }

    .stat-number i {
        font-size: 1.2rem;
        color: var(--primary-500);
    }

    .stat-label {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.12rem;
        color: var(--neutral-500);
    }

    .stat-divider {
        width: 1px;
        height: 32px;
        background: var(--neutral-300);
    }

    /* ---- Section Dividers ---- */
    .section-divider {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 3rem 0;
    }

    .divider-line {
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--neutral-300), transparent);
    }

    .section-divider > i {
        font-size: 0.75rem;
        color: var(--neutral-400);
    }

    /* ---- Sections ---- */
    .section {
        margin-top: 0;
    }

    .section-header {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.75rem;
    }

    .section-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--primary-200), var(--primary-100));
        border-radius: 10px;
        margin-top: 0.1rem;
    }

    .section-icon i {
        font-size: 1.2rem;
        color: var(--primary-600);
    }

    .section-icon.alt {
        background: linear-gradient(135deg, var(--alt1-200), var(--alt1-100));
    }

    .section-icon.alt i {
        color: var(--alt1-600);
    }

    .section-header h2 {
        text-align: left;
        margin-bottom: 0.15rem;
        font-size: 1.6rem;
    }

    .section-desc {
        color: var(--neutral-550);
        font-size: 0.9rem;
    }

    /* ---- Experiment Cards ---- */
    .experiments-grid {
        display: grid;
        gap: 0.75rem;
    }

    .experiment-card {
        position: relative;
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
        padding: 1.25rem 1.5rem;
        background: var(--neutral-150);
        border: 1px solid var(--neutral-250);
        border-radius: 10px;
        text-decoration: none;
        cursor: pointer;
        overflow: hidden;
        animation: fade-up 0.5s ease-out both;
        animation-delay: var(--delay);
    }

    @keyframes fade-up {
        from {
            opacity: 0;
            transform: translateY(16px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .experiment-card .card-glow {
        position: absolute;
        top: -50%;
        right: -20%;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, var(--primary-300), transparent 70%);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    .experiment-card:hover .card-glow {
        opacity: 0.06;
    }

    .experiment-card:hover {
        border-color: var(--primary-400);
        background: var(--neutral-150);
        box-shadow: 0 0 20px rgba(0, 231, 73, 0.04), inset 0 1px 0 var(--neutral-300);
    }

    .card-number {
        font-family: var(--header-font);
        font-size: 2rem;
        font-weight: 700;
        color: var(--neutral-250);
        line-height: 1;
        flex-shrink: 0;
        min-width: 36px;
        transition: color 0.3s ease;
    }

    .experiment-card:hover .card-number {
        color: var(--primary-300);
    }

    .experiment-card.featured .card-number {
        font-size: 2.5rem;
    }

    .card-content {
        flex: 1;
        min-width: 0;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .card-header h3 {
        font-size: 1.15rem;
        margin-bottom: 0.2rem;
        text-align: left;
    }

    .card-date {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.7rem;
        color: var(--neutral-450);
        white-space: nowrap;
    }

    .card-date i {
        font-size: 0.65rem;
        color: var(--neutral-450);
    }

    .experiment-card p {
        color: var(--neutral-600);
        font-size: 0.85rem;
        margin-bottom: 0.6rem;
        line-height: 1.35rem;
    }

    .card-link {
        font-family: var(--header-font);
        font-size: 0.8rem;
        color: var(--neutral-450);
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .card-link i {
        font-size: 0.65rem;
        transition: transform 0.2s ease;
    }

    .experiment-card:hover .card-link {
        color: var(--primary-500);
    }

    .experiment-card:hover .card-link i {
        transform: translateX(5px);
    }

    .view-all {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1.5rem;
        font-family: var(--header-font);
        font-size: 0.95rem;
        color: var(--neutral-900);
        text-decoration: none;
        padding: 0.5rem 1.25rem;
        border: 1px solid var(--neutral-300);
        border-radius: 8px;
        background: transparent;
    }

    .view-all:hover {
        border-color: var(--primary-500);
        color: var(--primary-500);
        box-shadow: 0 0 16px rgba(0, 231, 73, 0.08);
    }

    .view-all i {
        font-size: 0.75rem;
        transition: transform 0.2s ease;
    }

    .view-all:hover i {
        transform: translateX(4px);
    }

    /* ---- Reading List ---- */
    .readings-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .reading-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.9rem 1.25rem;
        background: var(--neutral-150);
        border: 1px solid var(--neutral-250);
        border-radius: 10px;
        text-decoration: none;
        cursor: pointer;
        overflow: hidden;
        animation: fade-up 0.5s ease-out both;
        animation-delay: var(--delay);
    }

    .reading-item:hover {
        border-color: var(--alt1-400);
        background: var(--neutral-150);
        box-shadow: 0 0 20px rgba(18, 112, 255, 0.05), inset 0 1px 0 var(--neutral-300);
    }

    .reading-number {
        font-family: var(--header-font);
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--neutral-350);
        letter-spacing: 0.05rem;
    }

    .reading-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        flex-shrink: 0;
        background: var(--neutral-200);
        border-radius: 8px;
        border: 1px solid var(--neutral-300);
    }

    .reading-icon i {
        font-size: 0.9rem;
        color: var(--alt1-500);
    }

    .reading-icon.article i {
        color: var(--alt2-500);
    }

    .reading-item:hover .reading-icon {
        background: var(--alt1-100);
        border-color: var(--alt1-300);
    }

    .reading-item:hover .reading-icon.article {
        background: var(--alt2-100);
        border-color: var(--alt2-300);
    }

    .reading-info {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        flex: 1;
        min-width: 0;
    }

    .reading-title {
        font-family: var(--header-font);
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--neutral-850);
    }

    .reading-author {
        font-size: 0.75rem;
        color: var(--neutral-500);
    }

    .reading-badge {
        font-family: var(--header-font);
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: var(--alt1-500);
        background: var(--alt1-100);
        padding: 0.2rem 0.55rem;
        border-radius: 4px;
        white-space: nowrap;
        border: 1px solid var(--alt1-200);
    }

    .reading-badge.article-badge {
        color: var(--alt2-500);
        background: var(--alt2-100);
        border-color: var(--alt2-200);
    }

    .external-icon {
        font-size: 0.65rem;
        color: var(--neutral-350);
        transition: color 0.2s ease, transform 0.2s ease;
    }

    .reading-item:hover .external-icon {
        color: var(--alt1-500);
        transform: translate(2px, -2px);
    }

    /* ---- Footer ---- */
    footer {
        text-align: center;
        margin-top: 4rem;
        padding: 2rem 0;
    }

    .footer-ghost {
        font-size: 1.5rem;
        color: var(--neutral-300);
        margin-bottom: 0.5rem;
    }

    footer p {
        font-size: 0.75rem;
        color: var(--neutral-400);
        letter-spacing: 0.1rem;
        text-transform: lowercase;
    }

    /* ---- Responsive ---- */
    @media (min-width: 768px) {
        .page {
            padding: 3rem 2rem 2rem;
        }

        .hero {
            padding: 5rem 0 3rem;
        }

        .hero-icon {
            font-size: 6rem;
        }

        .hero-title {
            font-size: 3.8rem;
        }

        .experiments-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .experiment-card.featured {
            grid-column: 1 / -1;
        }

        .experiment-card.featured .card-content p {
            max-width: 70%;
        }
    }

    @media (max-width: 600px) {
        .hero-stats {
            gap: 1rem;
            padding: 0.75rem 1.25rem;
        }

        .reading-badge,
        .reading-number {
            display: none;
        }
    }
</style>
