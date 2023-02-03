from grades_module import load_grades, save_grades
from extract_grades import extract_grades, calculate_stats
import os


RAW_DATA = r"data\raw"


def main() -> None:
    grades = load_grades()
    for folder in os.listdir(RAW_DATA):
        for file in os.listdir(rf"{RAW_DATA}\{folder}"):
            extract_grades(rf"{RAW_DATA}\{folder}\{file}", grades, folder)

    calculate_stats(grades)
    save_grades(grades)
    print("Done!")


if __name__ == "__main__":
    main()
