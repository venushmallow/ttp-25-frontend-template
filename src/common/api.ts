export const fetchUserProfile = async () => {
    const url = 'http://localhost:8000/api/json';
    const response = await fetch(url);
    if (response.ok) {
        return response.json()
    }
    return 'there is an error'
}