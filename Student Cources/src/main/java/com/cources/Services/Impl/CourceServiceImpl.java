package com.cources.Services.Impl;

import com.cources.Dao.CourceRepository;
import com.cources.Services.CourceService;
import com.cources.Model.Cources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourceServiceImpl implements CourceService {

    @Autowired
    private CourceRepository courceRepository;


    @Override
    public List<Cources> GetAll() {
        List<Cources> cources = this.courceRepository.findAll();
        return cources;
    }

    @Override
    public Cources GetSingleCource(int id) {
        Optional<Cources> courcesOptional = this.courceRepository.findById(id);
        Cources singleCource = courcesOptional.get();
        System.out.println("optional Value : " + singleCource);
        return singleCource;
    }

    @Override
    public Cources SaveCource(Cources cources) {
        System.out.println("Cource details is: " + cources);
        Cources savedCource = this.courceRepository.save(cources);
        return savedCource;
    }

    @Override
    public void DeleteCource(int id) {

        this.courceRepository.deleteById(id);

    }

    @Override
    public Cources UpdateCource(Cources cources) {
        System.out.println("Cource details is: " + cources);

        Cources updated = courceRepository.save(cources);
        System.out.println("Cource details is: " + updated);
        return updated;
    }


}
