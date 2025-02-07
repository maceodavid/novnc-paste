# NoVNC Paste
Permet de coller du texte présent dans votre presse-papiers vers la console NoVNC de Proxmox

# Utilisation
Copiez le code du fichier script.js  
https://raw.githubusercontent.com/maceodavid/novnc-paste/refs/heads/main/script.js  
  
Faites un clic droit dans la zone grise à gauche de la console NoVNC, puis Inspecter  
  
![image](https://github.com/user-attachments/assets/0f1528ec-a16c-4ea6-8b56-b64f1d963473) 
  
Allez dans l'onglet Console  
  
![image](https://github.com/user-attachments/assets/adccb0c9-bf24-4269-8347-0f6ad00aa588)  
  
Collez le code et exécutez le (il y aura probablement un message d'erreur vous disant d'autoriser le collage, il suffit de faire ce qui est écrit et coller à nouveau le code)  
  
Vous pouvez maintenant coller du texte de votre presse-papiers sur la console NoVNC en faisant clic droit  
(autorisez l'accès au presse-papiers si votre navigateur vous le demande)  
  
Pas obligatoire mais vous pouvez ouvrir un bloc-notes et coller d'abord les commandes du pdf dans le bloc-notes afin de les corriger si besoin, puis copier les commandes corrigées et les mettre dans la console NoVNC

# Compatibilité
J'ai testé le code sur Chrome et Firefox et il fonctionnait sur les deux navigateurs

# Problèmes connus
On ne peut pas coller le signe %  
Le code ne fonctionne que sur les versions récentes des navigateurs  
Si vous rencontrez d'autres problèmes vous pouvez créer une [issue](https://github.com/maceodavid/novnc-paste/issues) ou me contacter sur discord  

# Source
modifié à partir de  
https://gist.github.com/4Sitam4/f5735192954fff8fdef8c57ff6dc91a3  
https://gist.github.com/amunchet/4cfaf0274f3d238946f9f8f94fa9ee02
