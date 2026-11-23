export default function Detail({ title, skills }) {
    return (
        <div className="mt-6">
            <h4 className="font-semibold mb-2">{title}</h4>
            <ul className="list-dic list-inside text-zinc-400 space-y-1">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}