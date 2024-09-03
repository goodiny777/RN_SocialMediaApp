const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
        return [];
    }
    return database.slice(startIndex, endIndex);
};

export default pagination;