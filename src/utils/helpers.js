module.exports = {
    formatDate: (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('fr-FR', options).format(date);
    },
    generateId: () => {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }
};