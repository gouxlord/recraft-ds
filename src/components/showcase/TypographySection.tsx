
import { Card, CardContent } from '../ui/card';

const TypographySection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Typographie</h2>
      <Card className="hover-lift animate-slide-up">
        <CardContent className="pt-6">
          <div className="space-y-8">
            {/* Headings */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Titres</h4>
              <div className="space-y-3">
                <div className="mb-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                  <p className="text-sm text-primary-700">
                    <strong>Police Lexend</strong> - Utilisée pour tous les titres pour une meilleure lisibilité et un aspect moderne.
                  </p>
                </div>
                <h1 className="font-heading text-4xl font-bold text-gray-900">Titre H1 - Grande taille (Lexend)</h1>
                <h2 className="font-heading text-3xl font-semibold text-gray-900">Titre H2 - Moyenne taille (Lexend)</h2>
                <h3 className="font-heading text-2xl font-semibold text-gray-900">Titre H3 - Section (Lexend)</h3>
                <h4 className="font-heading text-xl font-medium text-gray-900">Titre H4 - Sous-section (Lexend)</h4>
                <h5 className="font-heading text-lg font-medium text-gray-900">Titre H5 - Petit titre (Lexend)</h5>
                <h6 className="font-heading text-base font-medium text-gray-900">Titre H6 - Mini titre (Lexend)</h6>
              </div>
            </div>

            {/* Body Text */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Texte de corps</h4>
              <div className="space-y-3">
                <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Police Inter</strong> - Utilisée pour tout le texte de corps, optimisée pour la lisibilité à l'écran.
                  </p>
                </div>
                <p className="text-lg text-gray-900">
                  Texte large (Inter) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-base text-gray-900">
                  Texte normal - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="text-sm text-gray-600">
                  Texte petit - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Duis aute irure dolor in reprehenderit in voluptate.
                </p>
                <p className="text-xs text-gray-500">
                  Texte très petit - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* Text Styles */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Styles de texte</h4>
              <div className="space-y-2">
                <p className="text-base font-bold text-gray-900">Texte en gras</p>
                <p className="text-base font-semibold text-gray-900">Texte semi-gras</p>
                <p className="text-base font-medium text-gray-900">Texte medium</p>
                <p className="text-base font-normal text-gray-900">Texte normal</p>
                <p className="text-base font-light text-gray-600">Texte léger</p>
                <p className="text-base italic text-gray-600">Texte italique</p>
                <p className="text-base underline text-gray-900">Texte souligné</p>
                <p className="text-base line-through text-gray-500">Texte barré</p>
                <p className="text-base uppercase tracking-wide text-gray-700">Texte majuscules</p>
                <p className="text-base font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">Code monospace</p>
              </div>
            </div>

            {/* Color Variations */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Couleurs de texte</h4>
              <div className="space-y-2">
                <p className="text-base text-gray-900">Texte principal - Gray 900</p>
                <p className="text-base text-gray-700">Texte secondaire - Gray 700</p>
                <p className="text-base text-gray-600">Texte tertiaire - Gray 600</p>
                <p className="text-base text-gray-500">Texte subtil - Gray 500</p>
                <p className="text-base text-primary-600">Texte primaire - Primary 600</p>
                <p className="text-base text-secondary-600">Texte secondaire - Secondary 600</p>
                <p className="text-base text-success-600">Texte succès - Success 600</p>
                <p className="text-base text-warning-600">Texte attention - Warning 600</p>
                <p className="text-base text-error-600">Texte erreur - Error 600</p>
              </div>
            </div>

            {/* Line Height & Spacing */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Espacement et hauteur de ligne</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Interligne serré (leading-tight)</p>
                  <p className="text-base leading-tight text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Interligne normal (leading-normal)</p>
                  <p className="text-base leading-normal text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Interligne aéré (leading-relaxed)</p>
                  <p className="text-base leading-relaxed text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>

            {/* Lists */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Listes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Liste à puces</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Premier élément de liste</li>
                    <li>Deuxième élément de liste</li>
                    <li>Troisième élément avec du texte plus long pour tester le retour à la ligne</li>
                    <li>Quatrième élément</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Liste numérotée</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600">
                    <li>Premier élément numéroté</li>
                    <li>Deuxième élément numéroté</li>
                    <li>Troisième élément avec du texte plus long pour tester le retour à la ligne</li>
                    <li>Quatrième élément numéroté</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Liens</h4>
              <div className="space-y-2">
                <p className="text-base text-gray-600">
                  Voici un <a href="#" className="text-primary-600 hover:text-primary-700 underline hover:no-underline transition-colors">lien principal</a> dans du texte.
                </p>
                <p className="text-base text-gray-600">
                  Voici un <a href="#" className="text-secondary-600 hover:text-secondary-700 underline hover:no-underline transition-colors">lien secondaire</a> dans du texte.
                </p>
                <p className="text-base text-gray-600">
                  Voici un <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">lien subtil</a> dans du texte.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default TypographySection;