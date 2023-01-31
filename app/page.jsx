'use client';

export default function Home() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                'https://157.97.1.155:9004/v1/api',
                {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'origin': 'https://vanilla-cors.vercel.app'
                    }
                }
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <main>
                <button onClick={callAPI}>Make API call</button>
            </main>
        </div>
    );
}
