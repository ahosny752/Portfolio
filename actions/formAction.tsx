'use server';

export const submitForm = async (formData: FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const message = formData.get('message');
    try {
        await fetch('http://localhost:3000/api/contactMe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: '1234',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                company,
                message,
            }),
        });
    } catch (err) {
        console.log(err);
    }
};
