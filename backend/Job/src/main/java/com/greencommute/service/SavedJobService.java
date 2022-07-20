package com.greencommute.service;

import com.greencommute.dto.SavedJobDTO;
import com.greencommute.entity.SavedJob;

import java.util.List;

public interface SavedJobService {
    public List<SavedJob> findAll();
    public SavedJob findById(int i);
    public void deleteById(int theId);
    void save(SavedJob savedJobs);
    SavedJob convertToEntity(SavedJobDTO dto);
}
