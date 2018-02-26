async function feed(parent, args, context, info) {
    const {filter, first, skip} = args;
    const where = filter
        ? {OR: [{url_contains: filter}, {description_contains: filter}]}
        : {};

    const allLinks = await context.db.query.links({});
    const count = allLinks.length;

    const queriedLinks = await context.db.query.links({ first,skip, where });

    return {
        linkIds: queriedLinks.map(link => link.id),
        count
    }
}

module.exports = {
    feed
};