import React, {useEffect, useState} from 'react';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import coursesAPI from '../../services/coursesAPI';
import * as S from './styles';
import Header from '../../components/Header';

export interface ICourse {
  objectId: string;
  name: string;
  local: string;
  url_web: string;
  img: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  Icon.loadFont();

  useEffect(() => {
    coursesAPI.get('').then((response) => setCourses(response.data.results));
  }, []);

  return (
    <S.Container>
      <Header />
      <S.CourseContainer
        showsVerticalScrollIndicator={false}
        data={courses}
        keyExtractor={(course) => course.objectId}
        renderItem={({item: course}) => (
          <S.CourseArea onPress={() => Linking.openURL(course.url_web)}>
            <S.CourseAreaToImage>
              <S.CourseImage source={{uri: course.img}} />
            </S.CourseAreaToImage>
            <S.CourseTextArea>
              <S.CourseTitle>{course.name}</S.CourseTitle>
              <S.CourseLocal>{course.local}</S.CourseLocal>
            </S.CourseTextArea>
          </S.CourseArea>
        )}
      />
    </S.Container>
  );
};

export default Courses;
