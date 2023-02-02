import json


student_template_subject = {"itw": -1, "alga": -1, "ci": -1, "mas": -1, "fp": -1}
student_template_global = {
    "average": -1,
    "best": -1,
    "worst": -1,
    "subjects": {"best": [-1, []], "worst": [-1, []]},
    "year": {
        "1": {
            "average": -1,
            "semesters": {
                "1": {"average": -1, "best": -1, "worst": -1},
                "2": {"average": -1, "best": -1, "worst": -1},
            },
        },
        "2": {
            "average": -1,
            "semesters": {
                "1": {"average": -1, "best": -1, "worst": -1},
                "2": {"average": -1, "best": -1, "worst": -1},
            },
        },
        "3": {
            "average": -1,
            "semesters": {
                "1": {"average": -1, "best": -1, "worst": -1},
                "2": {"average": -1, "best": -1, "worst": -1},
            },
        },
    },
}


def clean_data(grades: dict) -> None:
    """Cleans the grades dictionary."""
    for student in grades["students"].values():
        student["subjects"] = student_template_subject
        student["global"] = student_template_global


def main() -> None:
    """Main function."""
    with open("grades.json", "r", encoding="utf8") as file:
        grades = json.load(file)
    clean_data(grades)
    with open("grades.json", "w", encoding="utf8") as file:
        json.dump(grades, file, indent=2, ensure_ascii=False)


main()
