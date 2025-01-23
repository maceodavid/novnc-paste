# NoVNC Paste
Permet de coller du texte présent dans votre presse-papier dans la console NoVNC de Proxmox

# Source
modifié à partir de
https://gist.github.com/4Sitam4/f5735192954fff8fdef8c57ff6dc91a3
https://gist.github.com/amunchet/4cfaf0274f3d238946f9f8f94fa9ee02

# Utilisation
Copiez le code du fichier script.js  
https://raw.githubusercontent.com/maceodavid/novnc-paste/refs/heads/master/script.js  
  
Faites un clic droit dans la zone grise à gauche de la console NoVNC, puis Inspecter  
  
![image](https://github.com/user-attachments/assets/0f1528ec-a16c-4ea6-8b56-b64f1d963473) 
  
Allez dans l'onglet Console  
  
![image](https://github.com/user-attachments/assets/adccb0c9-bf24-4269-8347-0f6ad00aa588)  
  
Collez le code et exécutez le (il y aura probablement un message d'erreur vous disant d'autoriser le collage, il suffit de faire ce qui est écrit et coller à nouveau le code)  
  
Vous pouvez maintenant coller du texte de votre presse-papier sur la console NoVNC en faisant clic droit  
(autorisez l'accès au presse-papier si votre navigateur vous le demande)  

# Problèmes connus
On peut pas coller le signe % j'ai essayé de patch mais pas réussi :(  
Si vous rencontrez d'autres problèmes vous pouvez créer une [issue](https://github.com/maceodavid/novnc-paste/issues) ou me contacter sur discord
