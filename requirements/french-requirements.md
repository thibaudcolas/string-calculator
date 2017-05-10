# String Calculator

- Créer une simple "String calculator" ayant une méthode `int Add(string numbers)`.
    + Cette méthode peut prendre 0, 1 ou 2 nombres, et retournera leur somme (pour une chaîne vide elle retournera 0) par exempl `""` ou `"1"` ou `"1,2"`.
    + Démarrer par le cas de test le plus simpliste de la chaîne vide pour avancer à 1 puis 2 nombres.
    + Les tâches doivent être réalisées le plus simplement possible afin de se forcer à écrire des tests auxquels on ne penserait pas de prime abord.
    + Ne pas oublier de refactorer le code après chaque test réussi.
- Permettre à la méthode Add de prendre une quantité indéfinie de nombres comme paramètres.
- Permettre à la méthode Add de gérer les sauts de ligne entre les nombres (à la place des virgules).
    + la chaîne suivante est valide : `1\n2,3` (égal 6).
    + la chaîne suivante est invalide : `1,\n`.
    + ajouter le support de délimiteurs.
- Gérer différents délimiteurs.
    + Pour changer de délimiteur, le début de la chaîne contiendra une ligne séparée suivant ce motif : `//[delimiter]\n[numbers…]`, par exemple `//;\n1;2` devra retourner 3 avec pour délimiteur `;`.
    + Cette première ligne est optionnelle. Tous les scénarios préexistants sont toujours supportés.
- Appeler Add avec un nombre négatif lèvera une exception `negatives not allowed` - suivi du nombre négatif ayant été passé. Si plusieurs négatifs sont donnés, les ajouter tous dans le message de l'exception.

> Finir ici pour les débutants. Ne continuer que si les étapes précédentes ont été finies en moins de 30 minutes.

- Les nombres supérieurs à 1000 doivent être ignorés, soit 2 + 1001 = 2.
- Les délimiteurs peuvent être de longueur variable en suivant le format suivant : `//[delimiter]\n`, par exemple `//[***]\n1***2***3` doit renvoyer 6.
- Autoriser plusieurs délimiteurs avec le motif : `//[delim1][delim2]\n`, par exemple `//[*][%]\n1*2%3` doit renvoyer 6.
- Vérifier que ces délimiteurs multiples peuvent tous avoir des longueurs variables.
