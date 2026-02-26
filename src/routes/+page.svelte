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
    <!-- Hero -->
    <section class="hero">
        <div class="hero-icon">
            <i class="fa-regular fa-ghost"></i>
        </div>
        <h1>Wraithcode</h1>
        <p class="sub-header tagline">
            A playground for exploring new tech, wild ideas, and random side projects.
            This is where I build, break, learn, and share it all with the world.
        </p>
    </section>

    <!-- Latest Experiments -->
    <section class="section">
        <h2><i class="fa-solid fa-flask"></i> Latest Experiments</h2>
        <p class="section-desc">The most recent things I've been tinkering with.</p>
        <div class="experiments-grid">
            {#each data.experiments as experiment}
                <a href={experiment.route} class="experiment-card">
                    <div class="card-header">
                        <h3>{experiment.name}</h3>
                        <span class="card-date">{dayjs(experiment.createdAt).format('MMM D, YYYY')}</span>
                    </div>
                    <p>{experiment.description}</p>
                    <span class="card-link">
                        Explore <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </a>
            {/each}
        </div>
        <a href="/experiments" class="view-all">
            View all experiments <i class="fa-solid fa-arrow-right"></i>
        </a>
    </section>

    <!-- Reading List -->
    <section class="section">
        <h2><i class="fa-solid fa-book-open"></i> Reading List</h2>
        <p class="section-desc">Books and articles that have shaped how I think about building software.</p>
        <div class="readings-list">
            {#each readings as item}
                <a href={item.url} target="_blank" rel="noopener noreferrer" class="reading-item">
                    <div class="reading-icon">
                        <i class="fa-solid {item.type === 'book' ? 'fa-book' : 'fa-newspaper'}"></i>
                    </div>
                    <div class="reading-info">
                        <span class="reading-title">{item.title}</span>
                        <span class="reading-author">{item.author}</span>
                    </div>
                    <span class="reading-badge">{item.type}</span>
                </a>
            {/each}
        </div>
    </section>
</div>

<style>
    .page {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem 1.5rem 4rem;
    }

    /* ---- Hero ---- */
    .hero {
        text-align: center;
        padding: 4rem 0 3rem;
    }

    .hero-icon {
        font-size: 6rem;
        color: var(--primary-500);
        text-shadow: 0 0 60px var(--primary-300);
        margin-bottom: 1rem;
        animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
    }

    .hero h1 {
        font-size: 3rem;
        letter-spacing: 0.15rem;
        margin-bottom: 1rem;
    }

    .tagline {
        max-width: 600px;
        margin: 0 auto;
        color: var(--neutral-650);
        line-height: 1.6rem;
    }

    /* ---- Sections ---- */
    .section {
        margin-top: 4rem;
    }

    .section h2 {
        text-align: left;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-bottom: 0.25rem;
    }

    .section h2 i {
        font-size: 1.4rem;
        color: var(--primary-500);
    }

    .section-desc {
        color: var(--neutral-550);
        margin-bottom: 1.5rem;
    }

    /* ---- Experiment Cards ---- */
    .experiments-grid {
        display: grid;
        gap: 1rem;
    }

    .experiment-card {
        display: block;
        padding: 1.25rem 1.5rem;
        background: var(--neutral-150);
        border: 1px solid var(--neutral-250);
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
    }

    .experiment-card:hover {
        border-color: var(--primary-400);
        background: var(--neutral-200);
    }

    .experiment-card:hover .card-link {
        color: var(--primary-500);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .card-header h3 {
        font-size: 1.2rem;
        margin-bottom: 0.25rem;
        text-align: left;
    }

    .card-date {
        font-size: 0.75rem;
        color: var(--neutral-500);
        white-space: nowrap;
    }

    .experiment-card p {
        color: var(--neutral-650);
        font-size: 0.875rem;
        margin-bottom: 0.75rem;
    }

    .card-link {
        font-family: var(--header-font);
        font-size: 0.85rem;
        color: var(--neutral-500);
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .card-link i {
        font-size: 0.7rem;
        transition: transform 0.15s ease-in-out;
    }

    .experiment-card:hover .card-link i {
        transform: translateX(4px);
    }

    .view-all {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1.25rem;
        font-family: var(--header-font);
        font-size: 0.95rem;
        color: var(--primary-500);
        text-decoration: none;
    }

    .view-all:hover {
        color: var(--primary-700);
    }

    .view-all i {
        font-size: 0.8rem;
        transition: transform 0.15s ease-in-out;
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
        padding: 1rem 1.25rem;
        background: var(--neutral-150);
        border: 1px solid var(--neutral-250);
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
    }

    .reading-item:hover {
        border-color: var(--alt1-400);
        background: var(--neutral-200);
    }

    .reading-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        background: var(--neutral-250);
        border-radius: 6px;
    }

    .reading-icon i {
        font-size: 1rem;
        color: var(--alt1-500);
    }

    .reading-item:hover .reading-icon {
        background: var(--alt1-100);
    }

    .reading-info {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
        flex: 1;
        min-width: 0;
    }

    .reading-title {
        font-family: var(--header-font);
        font-size: 1rem;
        font-weight: 500;
        color: var(--neutral-900);
    }

    .reading-author {
        font-size: 0.8rem;
        color: var(--neutral-550);
    }

    .reading-badge {
        font-family: var(--header-font);
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: var(--alt1-500);
        background: var(--alt1-100);
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
        white-space: nowrap;
    }

    /* ---- Responsive ---- */
    @media (min-width: 768px) {
        .page {
            padding: 3rem 2rem 5rem;
        }

        .hero {
            padding: 6rem 0 4rem;
        }

        .hero-icon {
            font-size: 8rem;
        }

        .hero h1 {
            font-size: 3.5rem;
        }

        .experiments-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .experiments-grid .experiment-card:first-child {
            grid-column: 1 / -1;
        }
    }
</style>
