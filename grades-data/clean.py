import json


student_template = {
    "name": "SEBASTIÃO LEITE RESENDE TEIXEIRA",
    "subjects": {"itw": -1, "alga": -1, "ci": -1, "mas": -1, "fp": -1},
    "global": {
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
    },
}

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
    with open(r"data\raw\itw\itw.txt", "r", encoding="utf8") as file:
        students = [
            (line.split()[0], " ".join(line.split()[1 : line.split().index("8295")]))
            for line in file
            if "8295" in line.split()
        ]
    grades["students"] = {
        nmec: {
            "name": name,
            "global": student_template_global,
            "subjects": student_template_subject,
        }
        for nmec, name in students
    }


def main() -> None:
    """Main function."""
    with open("grades-template.json", "r", encoding="utf8") as file:
        grades = json.load(file)
    clean_data(grades)
    with open("grades.json", "w", encoding="utf8") as file:
        json.dump(grades, file, indent=2, ensure_ascii=False)


main()
