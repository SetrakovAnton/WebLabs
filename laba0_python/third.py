def to_json(function_to_decorate):
    def the_wrapper_around_the_original_function():
        a = function_to_decorate()
        print(a)
    return the_wrapper_around_the_original_function

@to_json
def get_data():
    return {
    'data': 42
    }

get_data()