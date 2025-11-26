import { useEffect, useState, type SetStateAction } from "react";
import { getUsers, type User } from "../service/UserService.ts";

interface Props {
    onSelect: (user: User) => void;
}

const PeopleDropdown: React.FC<Props> = ({ onSelect }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selected, setSelected] = useState<User | null>(null);

    useEffect(() => {
        getUsers()
            .then((data: SetStateAction<User[]>) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load users.");
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="spinner-border text-primary"></div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    function handleSelect(id: number) {
        const user = users.find((u) => u.id === id) || null;
        setSelected(user);
        if (user) onSelect(user);
    }

    return (
        <div className="card p-3 my-3">
            <h5>Select User</h5>

            <select className="form-select" onChange={(e) => handleSelect(Number(e.target.value))}>
                <option value="">-- Choose User --</option>
                {users.map((u) => (
                    <option key={u.id} value={u.id}>
                        {u.name}
                    </option>
                ))}
            </select>

            {selected && (
                <div className="card mt-3 p-3">
                    <h6>{selected.name}</h6>
                    <p>Email: {selected.email}</p>
                    <p>Phone: {selected.phone}</p>
                </div>
            )}
        </div>
    );
};

export default PeopleDropdown;
