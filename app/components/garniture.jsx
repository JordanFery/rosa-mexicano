export default function Garniture({ ingredient, prix }) {
    return (
        <div className="flex flex-row w-full justify-between mt-2">
            <p className="text-lg text-gray-800">{ingredient}</p>
            <p className="text-pink-500 font-bold">{prix}</p>
        </div>
    );
}
