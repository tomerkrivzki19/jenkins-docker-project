# # סביבת עבודה של JENKINS - זה למה הוא צריך קובץ משל עצמו

# FROM jenkins/jenkins:lts-jdk21

# # ברירת מחדשל של JENKINS  -- הוא היחידי שיש לו את ההרשאות...
# USER root 
# curl - פקודה שמרציה קבצים דרך האינטרנט 

FROM jenkins/jenkins:lts-jdk17

 

USER root

 

RUN apt-get update && \

    apt-get install -y docker.io curl && \

    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \

    apt-get install -y nodejs && \

    apt-get clean && rm -rf /var/lib/apt/lists/*

USER jenkins