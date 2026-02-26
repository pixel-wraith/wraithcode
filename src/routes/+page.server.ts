import { ExperimentsService } from '$lib/services/experiments';

export async function load() {
    const service = new ExperimentsService();
    const experiments = await service.getExperiments();

    const latest = experiments
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, 5);

    return {
        experiments: latest.map((e) => ({
            name: e.name,
            route: e.route,
            description: e.description,
            createdAt: e.createdAt.toISOString()
        }))
    };
}
