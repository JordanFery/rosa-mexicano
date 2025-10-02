"use client"

export default function Footer() {


    return (

        <section className="mt-10 bg-gray-900 text-white">
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-end-12 py-8">
                    {/* Nom du restaurant */}
                    <h2 className="text-2xl font-bold mb-4">Restaurant Rosa Mexicano</h2>

                    {/* Adresse */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Adresse</h3>
                        <p className="text-sm">1477 Rue Sainte-Catherine Est, Montréal, Québec H2L 2H9</p>
                    </div>

                    {/* Contact */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Contact</h3>
                        <p className="text-sm">📞 514-527-2777</p>
                        <p className="text-sm">✉ info@rosamexicanomtl.ca</p>
                    </div>

                    {/* Horaires */}
                    <div className="mb-4">
                        <h3 className="font-semibold">Horaires d'ouvertures</h3>
                        <p className="text-sm">Du mardi au jeudi : 12:00 pm – 9:00 pm</p>
                        <p className="text-sm">Vendredi et samedi : 12:00 pm – 12:00 am</p>
                        <p className="text-sm">Dimanches : 12:00 pm – 5:00 pm</p>
                    </div>

                    {/* Footer copyright */}
                    <div className="mt-6 text-xs text-gray-400">
                        © {new Date().getFullYear()} Rosa Mexicano. Tous droits réservés.
                    </div>
                </div>
            </div>
        </section>
    )

}