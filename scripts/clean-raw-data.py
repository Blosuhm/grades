import os


RAW_DATA = r"data\raw"


def isfloat(value: str) -> bool:
    try:
        float(value)
        return True
    except ValueError:
        return False


def isgrade(value: int) -> bool:
    return isinstance(value, int) and 0 <= value <= 20


def choose_grade(new_value: int | str, old_value: int | str) -> int | str:
    """Chooses the best grade between the new and the old one."""
    if isgrade(new_value) and isgrade(old_value):
        return max(new_value, old_value)
    elif isgrade(new_value) and not isgrade(old_value):
        return new_value
    elif not isgrade(new_value) and isgrade(old_value):
        return old_value
    else:
        return new_value


def clear_data() -> None:
    """Cleans the raw data."""
    for folder in os.listdir(RAW_DATA):
        clean_data = dict()
        for file in os.listdir(rf"{RAW_DATA}\{folder}"):
            with open(rf"{RAW_DATA}\{folder}\{file}", "r", encoding="utf-8") as f:
                for line in f:
                    nmec, grade = line.strip().split()[0], line.strip().split()[-1]
                    grade = round(float(grade)) if isfloat(grade) else grade

                    clean_data[nmec] = choose_grade(grade, clean_data.get(nmec, ""))
        with open(rf"data\clean\{folder}.tsv", "w", encoding="utf-8") as f:
            for nmec, grade in clean_data.items():
                f.write(f"{nmec}\t{grade}\n")


clear_data()
