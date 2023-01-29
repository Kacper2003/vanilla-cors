'use client';

export default function Home() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                'https://157.97.1.155:9004/v1/login',
                {
                    method: 'POST',
                    headers: [
                      { key: "Access-Control-Allow-Credentials", value: "true" },
                      { key: "Access-Control-Allow-Origin", value: "*" },
                      { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                      { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    ],
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
