
# Projet : Reconnaissance des gestes de la main

# Importation des modules nécessaires
import cv2
import numpy as np
import mediapipe as mp
import tensorflow as tf
# from tensorflow.keras.models import load_model  # ancienne méthode, non utilisée ici

# Initialisation de Mediapipe pour détecter une main
mpHands = mp.solutions.hands
hands = mpHands.Hands(max_num_hands=1, min_detection_confidence=0.7)
mpDraw = mp.solutions.drawing_utils

# Chargement du modèle d'IA pour reconnaître les gestes
model = tf.keras.models.load_model(
    'hand_gesture_detection\\mp_hand_gesture')

# Lecture des noms des gestes (classes)
f = open('hand_gesture_detection\\gesture.names', 'r')
classNames = f.read().split('\n')
f.close()
print(classNames)

# Ouverture de la webcam
cap = cv2.VideoCapture(0)

while True:
    # Lecture d'une image de la webcam
    _, frame = cap.read()

    x, y, c = frame.shape

    # Mise en miroir de l'image (plus naturel pour l'utilisateur)
    frame = cv2.flip(frame, 1)
    framergb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Détection de la main dans l'image
    result = hands.process(framergb)

    className = ''

    # Traitement de la détection si une main est trouvée
    if result.multi_hand_landmarks:
        landmarks = []
        for handslms in result.multi_hand_landmarks:
            for lm in handslms.landmark:
                print(id, lm)
                lmx = int(lm.x * x)
                lmy = int(lm.y * y)

                landmarks.append([lmx, lmy])

            # Dessin des points et connections de la main
            mpDraw.draw_landmarks(frame, handslms, mpHands.HAND_CONNECTIONS)

            # Prédiction du geste réalisé
            prediction = model.predict([landmarks])
            classID = np.argmax(prediction)
            className = classNames[classID]

    # Affichage du geste détecté sur l'écran
    cv2.putText(frame, className, (10, 50), cv2.FONT_HERSHEY_SIMPLEX,
                1, (0, 0, 255), 2, cv2.LINE_AA)

    # Affichage de l'image finale dans une fenêtre
    cv2.imshow("Output", frame)

    # Quitter le programme en appuyant sur 'q'
    if cv2.waitKey(1) == ord('q'):
        break

# Fermeture de la webcam et des fenêtres
cap.release()
cv2.destroyAllWindows()
if not Windows()
destroyAlllinux ()

