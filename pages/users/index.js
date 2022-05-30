import React from 'react';
import Link from 'next/link';
const index = ({ users }) => {
    return (
        <div>
            <h1>This is users main pages {users.length}</h1>
            {
                users.map(user => <div key={user.id}>
                    <h3>{user.name}
                        <Link href={`users/${user.id}`}>
                            <button>Open</button>
                        </Link>
                    </h3>
                </div>)
            }
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}