'use client';

export default function Home() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                'https://157.97.1.155:9004/v1/login',
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'origin': 'https://vanilla-cors.vercel.app',
                        'Access-Control-Allow-Origin': 'https://157.97.1.155:9004/v1/login',
                    },
                    body: {
                        'userid': 'Kacper',
                        'password': '1234',
                        'usertype': 1
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
