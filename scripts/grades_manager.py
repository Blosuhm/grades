from grades_module import load_grades, save_grades
from extract_grades import extract_grades, calculate_stats


def main() -> None:
    grades = load_grades()
    extract_grades(r"data\raw\fpnf.tsv", grades, "fp", sep="\t")
    calculate_stats(grades)
    save_grades(grades)
    print("Done!")


if __name__ == "__main__":
    main()
