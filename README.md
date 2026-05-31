# 🤖 Main Robotique IA

![Status](https://img.shields.io/badge/status-in%20development-orange)
![ESP32](https://img.shields.io/badge/ESP32-IoT-green)
![Python](https://img.shields.io/badge/Python-3.x-yellow)
![AI](https://img.shields.io/badge/AI-MediaPipe-red)
![License](https://img.shields.io/badge/license-open--source-lightgrey)

---

## 🖼️ Overview

![Robotic Hand](https://upload.wikimedia.org/wikipedia/commons/3/3f/Robotic_hand.jpg)

Open-source robotic hand project combining **ESP32**, **Python** and **MediaPipe AI** for real-time human–machine interaction.

This system enables control of a robotic hand through multiple methods:

- Embedded control via ESP32  
- Software control via Python  
- Real-time AI control using MediaPipe  

---

## 🎯 Objectives

- Control a robotic hand using servomotors  
- Use ESP32 for embedded actuation  
- Use Python for communication and control  
- Use MediaPipe for real-time hand tracking  
- Translate human gestures into robotic movement  

---

## 🧠 System Architecture


Camera → MediaPipe → Python → ESP32 → Servos → Robotic Hand


---

## 🔁 Real-Time Demonstration

![Demo GIF](https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif)

---

## 🔧 Technologies

- ESP32 (Arduino framework)  
- Python 3.x  
- MediaPipe (Google AI)  
- OpenCV  
- PySerial  
- Servo motors  
- C / C++  

---

## 📁 Project Structure


main-robotique-ia/
├── esp32/ # Embedded firmware (C/C++)
├── python/ # AI + control scripts
├── mediapipe/ # Vision tracking
├── cad/ # 3D models
├── docs/ # Technical documentation
├── tests/ # Experiments
└── README.md


---
## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/USERNAME/main-robotique-ia.git
cd main-robotique-ia

pip install opencv-python mediapipe pyserial numpy

🎮 Usage

python mediapipe_hand_tracking.py

🚀 Status

🟡 In development
Robotics + Artificial Intelligence experimental project

👨‍💻 Author

Bac Pro CIEL Student
Self-taught in Robotics, AI and Embedded Systems

🤝 Collaboration

MSBruno0088 — Development & Collaboration

📌 Note

This project explores real-time interaction between artificial intelligence and robotic systems using embedded hardware and computer vision.
