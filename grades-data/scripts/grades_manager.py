from grades_module import load_grades, save_grades
from extract_grades import extract_grades, calculate_stats
import os


CLEAN_DATA = r"grades-data\data\clean"


def main() -> None:
    grades = load_grades()
    for file in os.listdir(CLEAN_DATA):
        extract_grades(rf"{CLEAN_DATA}\{file}", grades, file.removesuffix(".tsv"))

    calculate_stats(grades)
    save_grades(grades)
    print("Done!")


if __name__ == "__main__":
    main()
