from grades_module import validategrade, isgrade


def extract_grades(
    filename: str, grades: dict, subject: str, *, sep: str | None = None
) -> None:
    """Extracts grades from a file and adds them to the grades dictionary.

    Args:
        filename (str): The name of the file to extract grades from.
        grades (dict): The dictionary to add the grades to.
        subject (str): The name of the subject to add the grades to.
    """
    if subject not in grades["subjects"]:
        print("Subject not found.")
        return

    with open(filename, "r", encoding="utf8") as f:
        lines = [line.strip().split(sep) for line in f]
        valid_grades = [(line[0], validategrade(line[-1])) for line in lines]

    students: dict = grades["students"]
    for nmec, grade in valid_grades:
        if nmec not in students:
            continue
        students[nmec]["subjects"][subject] = grade


def semester_stats(grades: dict) -> None:
    """Calculates the semester stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    for student in grades["students"].values():
        for year, year_info in student["global"]["year"].items():
            for semester, semester_info in year_info["semester"].items():
                possible_subjects: list[str] = grades["semester-subjects"][year][
                    semester
                ]
                if not possible_subjects:
                    continue
                valid_grades: list[int] = [
                    grade
                    for subject, grade in student["subjects"].items()
                    if isgrade(grade) and subject in possible_subjects
                ]
                if not valid_grades:
                    continue
                semester_info["average"] = round(
                    sum(valid_grades) / len(valid_grades), 2
                )
                semester_info["best"] = max(valid_grades)
                semester_info["worst"] = min(valid_grades)


def year_stats(grades: dict) -> None:
    """Calculates the year stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    for student in grades["students"].values():
        for year in student["global"]["year"].values():
            valid_grades: list[float] = [
                semester["average"]
                for semester in year["semester"].values()
                if isgrade(semester["average"])
            ]

            if not valid_grades:
                continue
            year["average"] = round(sum(valid_grades) / len(valid_grades), 2)


def subject_stats(grades: dict) -> None:
    """Calculates the subject stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    for student in grades["students"].values():
        valid_grades: list[int] = [
            grade for grade in student["subjects"].values() if isgrade(grade)
        ]
        if not valid_grades:
            continue

        def get_subjects(grade: int, student: dict) -> list[str]:
            """Returns a list of subjects with the given grade."""
            return [
                subject
                for subject, student_grade in student["subjects"].items()
                if grade == student_grade
            ]

        global_subjects: dict = student["global"]["subjects"]
        global_subjects["best"] = max(valid_grades), get_subjects(
            max(valid_grades), student
        )
        global_subjects["worst"] = min(valid_grades), get_subjects(
            min(valid_grades), student
        )


def global_stats(grades: dict) -> None:
    """Calculates the global stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    for student in grades["students"].values():
        global_info: dict = student["global"]
        valid_years: list[float] = [
            year["average"]
            for year in global_info["year"].values()
            if isgrade(year["average"])
        ]
        if not valid_years:
            continue
        global_info["average"] = round(sum(valid_years) / len(valid_years), 2)
        global_info["best"] = max(valid_years)
        global_info["worst"] = min(valid_years)


def total_semester_stats(grades: dict) -> None:
    """Calculates the total semester stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    for year, year_info in grades["global"]["year"].items():
        for semester, semester_info in year_info["semester"].items():
            valid_grades: list[float] = [
                student["global"]["year"][year]["semester"][semester]["average"]
                for student in grades["students"].values()
                if isgrade(
                    student["global"]["year"][year]["semester"][semester]["average"]
                )
            ]
            if not valid_grades:
                continue

            def get_students(grade: float, grades: dict) -> list[str]:
                """Returns a list of students with the given grade."""
                return [
                    student
                    for student, student_grade in grades["students"].items()
                    if grade
                    == student_grade["global"]["year"][year]["semester"][semester][
                        "average"
                    ]
                ]

            semester_info["average"] = round(sum(valid_grades) / len(valid_grades), 2)
            semester_info["best"] = max(valid_grades), get_students(
                max(valid_grades), grades
            )
            semester_info["worst"] = min(valid_grades), get_students(
                min(valid_grades), grades
            )


def total_year_stats(grades: dict) -> None:
    """Calculates the total year stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    for year, year_info in grades["global"]["year"].items():
        valid_grades: list[float] = [
            student["global"]["year"][year]["average"]
            for student in grades["students"].values()
            if isgrade(student["global"]["year"][year]["average"])
        ]
        if not valid_grades:
            continue

        def get_students(grade: float, grades: dict) -> list[str]:
            """Returns a list of students with the given grade."""
            return [
                student
                for student, student_grade in grades["students"].items()
                if grade == student_grade["global"]["year"][year]["average"]
            ]

        year_info["average"] = round(sum(valid_grades) / len(valid_grades), 2)
        year_info["best"] = max(valid_grades), get_students(max(valid_grades), grades)
        year_info["worst"] = min(valid_grades), get_students(min(valid_grades), grades)


def total_subject_stats(grades: dict) -> None:
    """Calculates the total subject stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    for subject, subject_info in grades["subjects"].items():
        valid_grades: list[int] = [
            student["subjects"][subject]
            for student in grades["students"].values()
            if isgrade(student["subjects"][subject])
        ]
        if not valid_grades:
            continue

        def get_students(grade: int, grades: dict) -> list[str]:
            """Returns a list of students with the given grade."""
            return [
                student
                for student, student_grade in grades["students"].items()
                if grade == student_grade["subjects"][subject]
            ]

        subject_info["average"] = round(sum(valid_grades) / len(valid_grades), 2)
        subject_info["best"] = max(valid_grades), get_students(
            max(valid_grades), grades
        )
        subject_info["worst"] = min(valid_grades), get_students(
            min(valid_grades), grades
        )


def total_global_stats(grades: dict) -> None:
    """Calculates the total global stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    valid_grades: list[float] = [
        student["global"]["average"]
        for student in grades["students"].values()
        if isgrade(student["global"]["average"])
    ]
    if not valid_grades:
        return

    def get_students(grade: float, grades: dict) -> list[str]:
        """Returns a list of students with the given grade."""
        return [
            student
            for student, student_grade in grades["students"].items()
            if grade == student_grade["global"]["average"]
        ]

    grades["global"]["average"] = round(sum(valid_grades) / len(valid_grades), 2)
    grades["global"]["best"] = max(valid_grades), get_students(
        max(valid_grades), grades
    )
    grades["global"]["worst"] = min(valid_grades), get_students(
        min(valid_grades), grades
    )


def global_subject_stats(grades: dict) -> None:
    """Calculates the global subject stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    valid_grades: list[float] = [
        subject["average"]
        for subject in grades["subjects"].values()
        if isgrade(subject["average"])
    ]
    if not valid_grades:
        return

    def get_subjects(grade: float, grades: dict) -> list[str]:
        """Returns a list of subjects with the given grade."""
        return [
            subject
            for subject, subject_grade in grades["subjects"].items()
            if grade == subject_grade["average"]
        ]

    grades["global"]["subjects"]["best"] = max(valid_grades), get_subjects(
        max(valid_grades), grades
    )
    grades["global"]["subjects"]["worst"] = min(valid_grades), get_subjects(
        min(valid_grades), grades
    )


def calculate_stats(grades: dict) -> None:
    """Calculates the stats for the grades dictionary.

    Args:
        grades (dict): The grades dictionary.
    """
    semester_stats(grades)
    year_stats(grades)
    subject_stats(grades)
    global_stats(grades)
    total_semester_stats(grades)
    total_year_stats(grades)
    total_subject_stats(grades)
    total_global_stats(grades)
    global_subject_stats(grades)
