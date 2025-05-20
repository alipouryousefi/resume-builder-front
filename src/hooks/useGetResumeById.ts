import { useQuery } from '@tanstack/react-query';
import { resumeService } from '../services/resumeService';

export const useGetResumeById = (id: string) => {
  return useQuery({
    queryKey: ['resume', id],
    queryFn: () => resumeService.getResumeById(id),
  });
}; 