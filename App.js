import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const resumeData = {
  imageLink: require('./me.jpg'),
  name: 'Shem de Guzman',
  course: 'BSIT',
  education: [
    {
      level: 'Elementary',
      school: 'Arcadio F. Deato Elementary School',
      imageLink: require('./elem.jfif'),
      year: '2013'
    },
    {
      level: 'High School',
      school: 'Polo National High School',
      imageLink: require('./jhs.jfif'),
      year: '2018'
    },
    {
      level: 'Tertiary',
      school: 'Global Reciprocal Colleges',
      imageLink: require('./grc.jpg'),
      year: '2025'
    },
  ],
  project1: [
    {
      name: 'Shem Music Picks 2022',
      link: 'https://shemdg.github.io/shemmusicpicks2022/',
      imageLink: require('./project1.webp'),
    },
  ],
  project2: [
    {
      name: 'Timbersaw',
      link: 'https://shemdg.github.io/timbersaw/timber',
      imageLink: require('./project2.png'),
    },
  ],
};

export default function App() {
  const [currentSection, setCurrentSection] = useState('name');

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about';
        case 'about':
          return 'project1';
        case 'project1':
          return 'project2';
        case 'project2':
          return 'contact';
        case 'contact':
          return 'name';
        default:
          return 'name';
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <>
              <Image source={resumeData.imageLink} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.header}>{resumeData.name}</Text>
                <Text style={styles.info}>{resumeData.course}</Text>
              </View>
            </>
          )}
          {currentSection === 'education' && (
            <View>
              {resumeData.education.map((edu, index) => (
                <View key={index} style={styles.textContainer}>
                  <Image source={edu.imageLink} style={styles.imageLink} />
                  <Text
                    style={styles.info}>{`${edu.level}: ${edu.school} ${edu.year}`}</Text>
                </View>
              ))}
            </View>
          )}
          {currentSection === 'about' && (
            <View>
            <Text style={[styles.header, { marginBottom: 10 }]}>About Me: </Text>
              <Text>
                Shem de Guzman is currently enrolled as a third-year student at
                Global Reciprocal Colleges and he specializes in Bachelor of
                Science in Information Technology. Like many other young-adult
                students, he's required to arrange and meet specific criteria so
                he can qualify to pursue his chosen computer programming career.{' '}
              </Text>
            </View>
          )}
          {currentSection === 'project1' && (
            <View>
              <Image
      source={resumeData.project2[0].imageLink}
      style={{ width: 300, height: 150, alignSelf: 'center' }}
    />
              {resumeData.project1.map((project, index) => (
                <Text
                  key={index}
                  style={
                    styles.project
                  }>{`${project.name}: ${project.link}`}</Text>
              ))}
              <Text>Feel free to explore the Music Trends of May 2022 made by Shem de Guzman!</Text>
            </View>
          )}
          {currentSection === 'project2' && (
            <View>
              <Image
      source={resumeData.project1[0].imageLink}
      style={{ width: 150, height: 150, alignSelf: 'center' }}
    />
              {resumeData.project2.map((project, index) => (
                <Text
                  key={index}
                  style={
                    styles.project
                  }>{`${project.name}: ${project.link}`}</Text>
              ))}
              <Text style={[{ marginTop: 10 }]}>A hero guide made by Shem de Guzman.</Text>
            </View>
          )}
          {currentSection === 'contact' && (
            <View>
            <Text style={[styles.header, { marginBottom: 10 }]}>Contact Me: </Text>
              <Text>Mobile: 0991-884-4694</Text>
              <Text>Email: shemrdg@gmail.com</Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'center', // Center content vertically
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  imageLink: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  project: {
    fontSize: 15,
    fontWeight: 'italic',
    borderColor: 'blue',
  },
  project: {
    fontSize: 15,
    fontWeight: 'italic',
    color: 'blue',
    marginTop: 10,
  },
});
