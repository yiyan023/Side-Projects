import '../models/workout.dart';
import '../models/exercise.dart';

class WorkoutData {

  List<Workout> workoutList = [
    Workout(
      name: "Upper Body",
      exercises: [
        Exercise(
          name: "Bicep Curls",
          weight: "10",
          sets: "3",
          reps: "10",
        )
      ]
    )
  ];
}