import json


GRADES_FILE = r"grades-data/data/grades.json"


def load_grades():
    """Loads the grades dictionary from the grades file."""
    with open(GRADES_FILE, "r", encoding="utf8") as f:
        return json.load(f)


def save_grades(grades: dict) -> None:
    """Saves the grades dictionary to the grades file."""
    with open(GRADES_FILE, "w", encoding="utf8") as f:
        json.dump(grades, f, indent=2, ensure_ascii=False)


def validategrade(grade: str) -> int:
    """Validates a grade.
    Returns the grade as an integer if it is valid, otherwise returns -2.
    """
    return int(grade) if grade.isdecimal() and int(grade) in range(0, 21) else -2


def isgrade(grade: int | float) -> bool:
    """Checks if integer is a grade."""
    return 0 <= grade <= 20
