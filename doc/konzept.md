# Konzept

* Fokus auf Nutzer, aber auch Interface für Labor/Gesundheitsamt mitdenken (ggf. sogar bauen)
* Use Case 1: Unterstützung/Vereinfachung des Prozesses
* Use Case 2: Nur vorhandene Daten eingeben (Fragebogen, Labor, Ergebnis, Kontakte,...) > für Übersicht anderer Bürger/GA (FW)

1. Screen Informationen und “get started/login” (Informationen was die App kann, Konzept; erstes großes Deliverable; als Fragen formulieren (s.uwas sind die verschiedenen Fälle/wann muss ich für meinen Test selbst zahlen, QR code muss nur noch gescannt werden im Labor; Infos zu PDF und Drucken (V1, hier könnte dann ein Labor-Workflow gebaut werden)
2.1 Anmelden (Vorname für Ansprache, E-Mail, PW, ggf. Telefon)
2.2 Login
3. Startseite (Greeting, zeigt Prozess oder Fragen und aktuellen Status)

Hallo, willkommen bei CovApp2

Wir lassen dich mit COVID-19 nicht allein.
Wir unterstützen Labore und Gesundheitsämter durch einen vereinfachten Informationsfluss.
Wir  informieren über Fallzahlen und Verbreitung.

Diese Fragen kann dir CovApp2 beantworten
* Gehöre ich zu einer Risikogruppe?
* Wie sollte ich mich verhalten, sollte ich mich testen lassen?
* Wie läuft ein Test in meinem Fall ab?
* Wie ist der Status meines Tests?

Das bietet CovApp2
* Erfasse deine Daten: Ob spezifisch für COVID-19, Kontaktdaten für den Test oder Kontaktpersonen — sammle alle relevanten Informationen an einem Platz
* Vereinbare einen Termin um dich testen zu lassen: Finde Labore in deiner Nähe oder vereinbare einen Hausbesuch, wenn es deine Situation erfordert
* Verkürze die Zeit für dich und Labore: Teile deine Informationen, verhindere dadurch lange Wartezeiten und ermögliche einen reibungslosen Testablauf
* Erhalte Updates über deinen Test: Du kannst den Status deines Tests jederzeit einsehen und erfährst du schneller dein Ergebnis

Prozess:
1. Sollte ich mich testen lassen? > Was CovApp jetzt kann
  * Ergebnis: Ja/nein und wie (zu Stelle gehen (welche; vllt basierend auf aktuellem Standort; oder Hausbesuch; weitere Handlungsempfehlungen)
  *  Vielleicht aufteilen: 1. Risikogruppe, 2. Aktuelle Symptome/Kontaktpersonen
  *  Änderbar (Symptome/Kontakte können sich ändern, Zeitstempel anzeigen)
2. Wenn ja, Test vereinbaren (“Bürgeramt”)
  * weitere benötigte Informationen (Kontakt etc.) angeben
  * Erweiterung ggf. Mit eID um Missbrauch vorzubeugen (Future Work)
3. Status einsehen (“DHL”)
4. Aktuelle Informationen bzw. Handlungsempfehlungen

Zusätzlich ggf. Kontakte hinzufügen, die auch CovApp2 nutzen (interner Abgleich wer positiv getestet wurde)

Am Ende: QR code, der alle Daten zusammenfasst

Zusätzlich Unbedingt Informationen wer welche Daten sehen kann (DSGVO, keine Auswirkungen auf Versicherung/Arbeitgeber)

Backend:
* Datenbank (login (mit type, email, PW; kann Bürger oder Labor sein (oder trennen?)), citizen, laboratory, ...)
* Einschätzung Risikogruppe/Test hier oder im FE? (Einfache Sachen vllt im FE und nur hier speichern)
* Verschlüsselt? (Wahrscheinlich in Future Work FW aufnehmen)
* Scheduling (wie Termine anlegen? Konzept > FW)

Website für Labore: Termine anbieten, Informationen aus QR code scannen, weitere Infos eingeben/scannen

Website für Gesundheitsamt: Anzahl Nutzer, Anzahl positiv/negativ, verbundene Nutzer/Fälle (Netzwerkgrafik?) ggf. Infos über Verlauf
* könnte auch als Übersicht auf Website verfügbar sein, auch interessant für Nutzer
* Ggf. trotzdem eigene Website für Anpassungen (FW)
