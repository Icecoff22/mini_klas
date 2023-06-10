package com.example.klas_server.Lecture.Material;

import com.example.klas_server.Lecture.Lecture.LectureDTO;
import com.example.klas_server.Lecture.Lecture.LectureService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lecture/material")
@CrossOrigin
public class LectureMaterialContoller {

    private final LectureMaterialService lectureMaterialService;

    @PostMapping("/list")
    public ResponseEntity<List<LectureMaterialDTO>> getLectureMaterialsByParameter(@RequestBody LectureMaterialDTO data )
    {

        try {




            List<LectureMaterialDTO> result = lectureMaterialService.printLectureMaterialsByParameter(data);
            if (result.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
