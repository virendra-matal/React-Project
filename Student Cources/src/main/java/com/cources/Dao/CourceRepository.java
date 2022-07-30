package com.cources.Dao;

import com.cources.Model.Cources;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourceRepository extends JpaRepository<Cources,Integer> {
}
