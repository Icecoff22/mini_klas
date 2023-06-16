package com.example.klas_server.Lecture.Register;

import com.example.klas_server.Lecture.Lecture.LectureDTO;
import com.example.klas_server.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "lecture_register")
@NoArgsConstructor
public class LectureRegisterDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;



    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private User user;



    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lectureid")
    private LectureDTO lectureDTO;

    @Column(name = "lecturename")
    private String lecturename;

    @Column(name = "lectureidcopy")
    private Integer lectureid;




    public LectureRegisterDTO(User user, LectureDTO lectureDTO, String lecturename, Integer lectureid) {
        this.user = user;
        this.lectureDTO= lectureDTO;
        this.lecturename = lecturename;
        this.lectureid = lectureid;
    }

}
