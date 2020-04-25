/**
 * Generic conversion interface which describes conversion between once source object and one target object.
 */
export interface Converter<S, T> {

  /**
   * Converts a given source object of type S to a target object of type T.
   * @param source the source object
   * @return the result target object
   */
  convert(source: S): T;
}
