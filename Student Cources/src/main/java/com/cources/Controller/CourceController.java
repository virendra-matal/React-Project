package com.cources.Controller;


import com.cources.Model.CourceResponse;
import com.cources.Model.Cources;
import com.cources.Services.CourceService;
import com.cources.Services.Impl.CourceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cources")
public class CourceController {


    @Autowired
    private CourceServiceImpl courceService;


    @GetMapping("/all")
    public ResponseEntity<List<Cources>> GetAll() {

        List<Cources> cources = courceService.GetAll();
        if (cources.size() > 0) {
            return ResponseEntity.ok(cources);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

//            return new ResponseEntity<>(new CourceResponse("Error","No Courses Found"),HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/singleCource/{id}")
    public ResponseEntity<Cources> GetSingleCource(@PathVariable("id") int id) {

        try {
            Cources singleCource = courceService.GetSingleCource(id);
            return ResponseEntity.ok(singleCource);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }


//        if (singleCource != null) {
//            return ResponseEntity.ok(singleCource);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
    }

    @PostMapping("/add")
    public ResponseEntity<Cources> AddCource(@RequestBody Cources cources) {
        System.out.println("data from client: "+cources);
        Cources savedcource = courceService.SaveCource(cources);
        if (savedcource != null) {

            return ResponseEntity.ok(savedcource);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @DeleteMapping("/deleteCource/{id}")
    public ResponseEntity<CourceResponse> DeleteCource(@PathVariable("id") int id) {

        courceService.DeleteCource(id);
        return new ResponseEntity<>(new CourceResponse("Success", "Record is deleted."), HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<Cources> UpdateCource(@RequestBody Cources cources) {
        Cources updatedcource = courceService.UpdateCource(cources);
        if (updatedcource != null) {
            return ResponseEntity.ok(updatedcource);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
