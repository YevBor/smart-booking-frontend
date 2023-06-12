export const weekly = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(
            'http://localhost:4000/booking/business/5ecf94b8-9dd3-4a2a-9140-5d70cdfbc341?page=1',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
