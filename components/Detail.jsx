export default function Detail({ title, value }) {
    return (
        <div>
            <h4 className="font-semibold mb-2">{title}</h4>
            <p className="text-zinc-400 leading-relaxed">{value}</p>
        </div>
    );
}